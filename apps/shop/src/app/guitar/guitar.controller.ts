import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { GuitarService } from './guitar.service';
import { CreateGuitarDto } from './dto/create-guitar.dto';
import { UpdateGuitarDto } from './dto/update-guitar.dto';
import { Property, Prefix } from '@guitar-shop/core';
import { ApiTags } from '@nestjs/swagger';
import { GuitarExistsGuard } from './guards/guitar-exists.guard';

const { Id } = Property

@Controller(Prefix.Guitar)
@ApiTags(Prefix.Guitar)
export class GuitarController {
  constructor(private readonly guitarService: GuitarService) {}

  @Post()
  create(
    @Body() createGuitarDto: CreateGuitarDto
  ) {
    return this.guitarService.create(createGuitarDto);
  }

  @Get()
  findAll() {
    return this.guitarService.findMany();
  }

  @Get(`:${Id}`)
  @UseGuards(GuitarExistsGuard)
  findOne(@Param(Id) id: number) {
    return this.guitarService.findOne(id);
  }

  @Patch(`:${Id}`)
  @UseGuards(GuitarExistsGuard)
  update(
    @Param(Id) id: number,
    @Body() updateGuitarDto: UpdateGuitarDto
  ) {
    return this.guitarService.update(id, updateGuitarDto);
  }

  @Delete(`:${Id}`)
  @UseGuards(GuitarExistsGuard)
  remove(
    @Param(Id) id: string
  ) {
    return this.guitarService.remove(+id);
  }
}
