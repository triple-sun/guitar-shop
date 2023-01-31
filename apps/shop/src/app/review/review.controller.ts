import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { JwtAuthGuard, Prefix, User } from '@guitar-shop/core';
import { GuitarExistsGuard } from '../guitar/guards/guitar-exists.guard';
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserAuthDto } from '../user/dto/user-auth.dto';

@Controller(Prefix.Review)
@ApiTags(Prefix.Review)
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post(`:id`)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UseGuards(GuitarExistsGuard)
  @ApiBody({type: CreateReviewDto})
  @ApiParam({name: 'id', type: Number})
  @ApiBody({type: CreateReviewDto})
  create(
    @Param('id') itemId: number,
    @User() user: UserAuthDto,
    @Body() dto: CreateReviewDto
  ) {
    return this.reviewService.create(itemId, user, dto);
  }

  @Get(`:id`)
  @UseGuards(GuitarExistsGuard)
  @ApiParam({name: 'id', type: Number})
  findAll(
    @Param('id') itemId: number,
    @Query('page') page = 1
  ) {
    return this.reviewService.findAll(itemId, page);
  }
}
