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
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserAuthDto } from '../user/dto/user-auth.dto';
import { ReviewRdo } from './rdo/review.rdo';
import { GuitarIdDto } from '../guitar/dto/guitar-id.dto';

@Controller(Prefix.Reviews)
@ApiTags(Prefix.Reviews)
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post(`:id`)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ReviewRdo })
  @UseGuards(GuitarExistsGuard, JwtAuthGuard)
  @ApiBody({ type: CreateReviewDto })
  create(
    @Param() {id}: GuitarIdDto,
    @User() {userId}: UserAuthDto,
    @Body() dto: CreateReviewDto
  ) {
    return this.reviewService.create(id, userId, dto);
  }

  @Get(`:id`)
  @UseGuards(GuitarExistsGuard)
  @ApiOkResponse({ type: [ReviewRdo] })
  findAll(@Param() {id}: GuitarIdDto, @Query('page') page = 1) {
    return this.reviewService.findAll(id, page);
  }
}
