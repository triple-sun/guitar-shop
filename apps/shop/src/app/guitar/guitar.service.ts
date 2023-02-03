import { GuitarEntity, Property } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { CreateGuitarDto, CreateGuitarQuery } from './dto/create-guitar.dto';
import { GuitarQueryDto } from './dto/guitar.query.dto';
import { UpdateGuitarDto } from './dto/update-guitar.dto';
import { GuitarRepository } from './guitar.repository';

@Injectable()
export class GuitarService {
  constructor(
    private readonly guitarRepository: GuitarRepository
  ) {}

  async create(dto: CreateGuitarDto, query: CreateGuitarQuery) {
    return await this.guitarRepository.create(
      new GuitarEntity({
        ...dto,
        ...query,
        [Property.Photo]: dto.photo.path
      })
    );
  }

  async findMany({page}: GuitarQueryDto) {
    return await this.guitarRepository.findMany(page)
  }

  findOne(id: number) {
    return this.guitarRepository.findOne(id);
  }

  async update(id: number, dto: UpdateGuitarDto) {
    const guitar = await this.guitarRepository.findOne(id)

    return this.guitarRepository.update(
      id,
      new GuitarEntity({...guitar, ...dto,
        [Property.Photo]: dto.photo?.path ?? guitar.photo
      })
    );
  }

  remove(id: number) {
    return this.guitarRepository.destroy(id);
  }
}
