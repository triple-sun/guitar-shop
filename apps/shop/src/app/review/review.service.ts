import { ReviewEntity } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { UserAuthDto } from '../user/dto/user-auth.dto';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewRepository } from './review.repository';

@Injectable()
export class ReviewService {
  constructor(
    private readonly reviewRepository: ReviewRepository
  ) {}

  create(itemId: number, user: UserAuthDto, dto: CreateReviewDto) {
    const review = new ReviewEntity({...dto, itemId, userId: user.userId})
    return this.reviewRepository.create(review)
  }

  findAll(itemId: number, page: number) {
    return this.reviewRepository.findMany(itemId, page)
  }
}
