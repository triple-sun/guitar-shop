import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GuitarService } from './guitar.service';
import { CreateGuitarDto } from './dto/create-guitar.dto';
import { UpdateGuitarDto } from './dto/update-guitar.dto';

@Controller('guitar')
export class GuitarController {
  constructor(private readonly guitarService: GuitarService) {}

  @Post()
  create(@Body() createGuitarDto: CreateGuitarDto) {
    return this.guitarService.create(createGuitarDto);
  }

  @Get()
  findAll() {
    return this.guitarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guitarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuitarDto: UpdateGuitarDto) {
    return this.guitarService.update(+id, updateGuitarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guitarService.remove(+id);
  }
}
