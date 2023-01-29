import { createMockGuitars } from '@guitar-shop/core';
import { CLI, HELP_COMMAND_TEXT, IGuitar, IUser, UserEntity } from '@guitar-shop/shared-types';
import { INestApplication, Logger } from '@nestjs/common';
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
  private readonly admin: IUser = { name: 'admin', password: 'admin', email: 'admin@guitar-shop.local', isAdmin: true }
  private readonly adminEntity: UserEntity = new UserEntity(this.admin)
  private mockGuitars: IGuitar[]
  private prisma: PrismaClient

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
      await this.adminEntity.setPassword(this.admin.password)
      await this.prisma.user.upsert({ where: { id: 1 }, update: this.adminEntity.toObject(), create: this.adminEntity.toObject() })
    } catch(err) {
      this.logger.error('Failed.')
      return this.logger.error(err.message)
    }

    try {
      this.logger.log(`...inserting items that we've generated...`)
      this.mockGuitars.forEach(async (gtr) => await this.prisma.guitar.upsert({ where: { id: gtr.id }, update: gtr, create: gtr }))
    } catch(err){
      this.logger.error('Failed.')
      return this.logger.error(err.message)
    }

    this.logger.log(`...all done!
      There were ${countBefore} guitars in the database.
      ${count > countBefore ? countBefore : count} were replaced${count > countBefore ? ` and ${count - countBefore} created. Total: ${countBefore + (count - countBefore)} guitars` : ''}.`)
  }

  async enableShutdownHooks(app: INestApplication) {
    this.prisma.$on('beforeExit', async () => {
      await app.close();
    })
  }
}

