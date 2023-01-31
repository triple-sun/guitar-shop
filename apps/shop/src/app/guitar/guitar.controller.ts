import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { GuitarService } from './guitar.service';
import { CreateGuitarDto, CreateGuitarQuery } from './dto/create-guitar.dto';
import { UpdateGuitarDto } from './dto/update-guitar.dto';
import { Property, Prefix, fillObject } from '@guitar-shop/core';
import { ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { GuitarExistsGuard } from './guards/guitar-exists.guard';
import { GuitarIdDto } from './dto/guitar-id.dto';
import { FormDataRequest } from 'nestjs-form-data';
import { GuitarRdo } from './rdo/guitar.rdo';

const { Id: ItemId } = Property

@Controller(Prefix.Guitar)
@ApiTags(Prefix.Guitar)
export class GuitarController {
  constructor(private readonly guitarService: GuitarService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({type: CreateGuitarDto})
  @FormDataRequest()
  create(
    @Query() query: CreateGuitarQuery,
    @Body() dto: CreateGuitarDto
  ) {
    return fillObject(GuitarRdo, this.guitarService.create(dto, query))
  }

  @Get()
  findAll() {
    return this.guitarService.findMany();
  }

  @Get(':id')
  @UseGuards(GuitarExistsGuard)
  findOne(
    @Param('id') id: number
  ) {
    return fillObject(GuitarRdo, this.guitarService.findOne(id))
  }

  @Patch(`:id`)
  @UseGuards(GuitarExistsGuard)

  @ApiBody({type: UpdateGuitarDto})
  update(
    @Param('id') {itemId}: GuitarIdDto,
    @Body() updateGuitarDto: UpdateGuitarDto
  ) {
    return this.guitarService.update(itemId, updateGuitarDto);
  }

  @Delete(`:id`)
  @ApiParam({name: 'id', type: GuitarIdDto})
  @UseGuards(GuitarExistsGuard)
  remove(
    @Param('id') guitarId: number
  ) {
    return this.guitarService.remove(guitarId);
  }
}
