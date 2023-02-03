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
import { Prefix, fillObject, JwtAuthGuard, IsAdminGuard } from '@guitar-shop/core';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { GuitarExistsGuard } from './guards/guitar-exists.guard';
import { GuitarIdDto } from './dto/guitar-id.dto';
import { FormDataRequest } from 'nestjs-form-data';
import { GuitarRdo } from './rdo/guitar.rdo';
import { GuitarQueryDto } from './dto/guitar.query.dto';

@Controller(Prefix.Guitar)
@ApiTags(Prefix.Guitar)
export class GuitarController {
  constructor(private readonly guitarService: GuitarService) {}

  @Post()
  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @ApiBearerAuth()
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
  findAll(
    @Query() query: GuitarQueryDto
  ) {
    return this.guitarService.findMany(query);
  }

  @Get(':id')
  @UseGuards(GuitarExistsGuard)
  findOne(
    @Param('id') id: number
  ) {
    return fillObject(GuitarRdo, this.guitarService.findOne(id))
  }

  @Patch(`:id`)
  @ApiBearerAuth()
  @UseGuards(GuitarExistsGuard, JwtAuthGuard, IsAdminGuard)
  @ApiBody({type: UpdateGuitarDto})
  update(
    @Param('id') {itemId}: GuitarIdDto,
    @Body() updateGuitarDto: UpdateGuitarDto
  ) {
    return this.guitarService.update(itemId, updateGuitarDto);
  }

  @Delete(`:id`)
  @ApiParam({name: 'id', type: GuitarIdDto})
  @ApiBearerAuth()
  @UseGuards(GuitarExistsGuard, JwtAuthGuard, IsAdminGuard)
  remove(
    @Param('id') guitarId: number
  ) {
    return this.guitarService.remove(guitarId);
  }
}
