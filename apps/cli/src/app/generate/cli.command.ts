import { CLI, createMockGuitars, getAdminConfig, HELP_COMMAND_TEXT, IGuitar, UserEntity } from '@guitar-shop/core';
import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { Command, CommandRunner, Option} from 'nest-commander';

type CliOptions = { generate: boolean, help: boolean }

@Command({
  name: CLI.Cli,
  description: "Генерирует тестовые товары для БД",
    options: {
    isDefault: true
  }
})
export class CliCommand extends CommandRunner {
  private readonly logger = new Logger(CLI.Cli)
  private mockGuitars: IGuitar[]
  private prisma: PrismaClient

  constructor(
    private readonly configService: ConfigService
  ) {
    super()
  }

  @Option({
    flags: `--g, --${CLI.Generate}`,
    description: `Generate <${CLI.Count}> items and insert them into the database using <${CLI.Connection}>`,
  })
  generate(option: boolean) {
    return option
  }

  @Option({
    flags: `-h, --${CLI.Help}`,
    description: 'Show help',
    defaultValue: true
  })
  help(option: boolean) {
    return option
  }

  async run(args: string[], options: CliOptions = { help: true, generate: false }): Promise<void> {
    this.command.helpOption(false)

    if (!options.generate) {
      return this.logger.log(HELP_COMMAND_TEXT)
    }

    if (args.length !== 2) {
      return this.logger.error(`
        ${args.length > 2 ? 'Too many' : 'Too few'} arguments provided for command --${CLI.Generate}.
        Received: ${[...args].map((arg) => `<${arg}>`).join(', ')}.
        Required: <n>, <connection string>.
      `)
    }

    const [n, connection] = args
    const count = parseInt(n, 10)

    const admin = getAdminConfig(this.configService)
    const adminEntity = new UserEntity(admin);

    try {
      this.logger.log(`Generating ${count} new items...`)
      this.mockGuitars = createMockGuitars(count);
    } catch(err) {
      this.logger.error('Invalid item count.')
      return this.logger.error(err.message)
    }

    try {
      this.logger.log(`...connecting to the database...`)
      this.prisma = new PrismaClient({ datasources: { db: { url: `postgresql://${connection}/guitar-shop?schema=public` }}})
      await this.prisma.$connect()
    } catch(err) {
      this.logger.error('Invalid database connection url.')
      return this.logger.error(err.message)
    }

    const countBefore = (await this.prisma.guitar.findMany()).length

    try {
      this.logger.log(`...setting up an admininstrator account...`)
      await adminEntity.setPassword(admin.password)
      await this.prisma.user.upsert({ where: { id: 1 }, update: adminEntity.toObject(), create: adminEntity.toObject() })
    } catch(err) {
      this.logger.error('Failed.')
      return this.logger.error(err.message)
    }

    try {
      this.logger.log(`...inserting items that we've generated...`)
      await this.prisma.guitar.createMany({ data: this.mockGuitars })
    } catch(err){
      this.logger.error('Failed.')
      return this.logger.error(err.message)
    }

    this.logger.log(`...all done!
      ${count} new entries were created. There are ${countBefore + count} guitars in the database now.`)
  }

  async enableShutdownHooks(app: INestApplication) {
    this.prisma.$on('beforeExit', async () => {
      await app.close();
    })
  }
}

