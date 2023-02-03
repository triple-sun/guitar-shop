import { CanActivate, ExecutionContext, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { GuitarRepository } from '../guitar.repository';

@Injectable()
export class GuitarExistsGuard implements CanActivate {
  constructor(
    @Inject(GuitarRepository) private readonly guitarRepository: GuitarRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const {params: { id }} = context.switchToHttp().getRequest()

    const guitar = await this.guitarRepository.findOne(parseInt(id));

    if (!guitar) {
      throw new NotFoundException(`Guitar with id ${id} was not found`)
    }

    return !!guitar;
    }
}
