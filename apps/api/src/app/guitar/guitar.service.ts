import { Entity, fillObject, getRemovedMessage, GuitarEntity, Property } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { CreateGuitarDto, CreateGuitarQuery } from './dto/create-guitar.dto';
import { GuitarQueryDto } from './dto/guitar.query.dto';
import { UpdateGuitarDto } from './dto/update-guitar.dto';
import { GuitarRepository } from './guitar.repository';
import { GuitarRdo } from './rdo/guitar.rdo';

@Injectable()
export class GuitarService {
  constructor(private readonly guitarRepository: GuitarRepository) {}

  async create(dto: CreateGuitarDto, query: CreateGuitarQuery) {
    const guitar = await this.guitarRepository.create(
      new GuitarEntity({
        ...dto,
        ...query,
        [Property.Photo]: dto.photo.path,
      })
    );

    return fillObject(GuitarRdo, guitar)
  }

  async findMany(query: GuitarQueryDto) {
    const guitars = await this.guitarRepository.findMany(query);

    return guitars.map((guitar) => fillObject(GuitarRdo, guitar))
  }

  async findOne(id: number) {
    const guitar = await this.guitarRepository.findOne(id);

    return fillObject(GuitarRdo, guitar)
  }

  async update(id: number, dto: UpdateGuitarDto) {
    const guitar = await this.guitarRepository.findOne(id);

    const update = await this.guitarRepository.update(
      id,
      new GuitarEntity({
        ...guitar,
        ...dto,
        [Property.Photo]: dto.photo?.path ?? guitar.photo,
      })
    );

    return fillObject(GuitarRdo, update)
  }

  async remove(id: number) {
    await this.guitarRepository.destroy(id);

    return getRemovedMessage(Entity.Guitar, id);
  }
}
