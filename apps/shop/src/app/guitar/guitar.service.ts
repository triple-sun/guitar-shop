import { Injectable } from '@nestjs/common';
import { CreateGuitarDto } from './dto/create-guitar.dto';
import { UpdateGuitarDto } from './dto/update-guitar.dto';

@Injectable()
export class GuitarService {
  create(createGuitarDto: CreateGuitarDto) {
    return 'This action adds a new guitar';
  }

  findAll() {
    return `This action returns all guitar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} guitar`;
  }

  update(id: number, updateGuitarDto: UpdateGuitarDto) {
    return `This action updates a #${id} guitar`;
  }

  remove(id: number) {
    return `This action removes a #${id} guitar`;
  }
}
