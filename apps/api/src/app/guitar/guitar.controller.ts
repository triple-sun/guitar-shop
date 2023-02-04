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
import {
  Prefix,
  JwtAuthGuard,
  IsAdminGuard,
  Entity,
  getRemovedSchema,
} from '@guitar-shop/core';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GuitarExistsGuard } from './guards/guitar-exists.guard';
import { GuitarIdDto } from './dto/guitar-id.dto';
import { FormDataRequest } from 'nestjs-form-data';
import { GuitarRdo } from './rdo/guitar.rdo';
import { GuitarQueryDto } from './dto/guitar.query.dto';

@Controller(Prefix.Items)
@ApiTags(Prefix.Items)
export class GuitarController {
  constructor(private readonly guitarService: GuitarService) {}

  @Post()
  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateGuitarDto })
  @ApiCreatedResponse({ type: GuitarRdo })
  @FormDataRequest()
  create(@Query() query: CreateGuitarQuery, @Body() dto: CreateGuitarDto) {
    return this.guitarService.create(dto, query)
  }

  @Get()
  @ApiOkResponse({ type: [GuitarRdo] })
  findAll(@Query() query: GuitarQueryDto) {
    return this.guitarService.findMany(query);
  }

  @Get(':id')
  @ApiOkResponse({type: GuitarRdo})
  @UseGuards(GuitarExistsGuard)
  findOne(@Param() { id }: GuitarIdDto) {
    return this.guitarService.findOne(id)
  }

  @Patch(`:id`)
  @ApiBearerAuth()
  @UseGuards(GuitarExistsGuard, JwtAuthGuard, IsAdminGuard)
  @ApiOkResponse({ type: GuitarRdo })
  @ApiBody({ type: UpdateGuitarDto })
  update(
    @Param() { id }: GuitarIdDto,
    @Body() updateGuitarDto: UpdateGuitarDto
  ) {
    return this.guitarService.update(id, updateGuitarDto);
  }

  @Delete(`:id`)
  @ApiBearerAuth()
  @ApiOkResponse(getRemovedSchema(Entity.Guitar))
  @UseGuards(GuitarExistsGuard, JwtAuthGuard, IsAdminGuard)
  remove(@Param() { id }: GuitarIdDto) {
    return this.guitarService.remove(id);
  }
}
