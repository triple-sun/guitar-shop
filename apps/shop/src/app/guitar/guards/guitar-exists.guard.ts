import { CanActivate, ExecutionContext, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { GuitarRepository } from '../guitar.repository';

@Injectable()
export class GuitarExistsGuard implements CanActivate {
  constructor(
    @Inject(GuitarRepository) private readonly guitarRepository: GuitarRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()

    const guitar = await this.guitarRepository.findOne(parseInt(request.params.id));

    if (!guitar) {
      throw new NotFoundException(`Guitar with id ${request.params.id} was not found`)
    }

    return !!guitar;
    }
}
