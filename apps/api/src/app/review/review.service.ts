import { fillObject, ReviewEntity } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { UserAuthDto } from '../user/dto/user-auth.dto';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewRdo } from './rdo/review.rdo';
import { ReviewRepository } from './review.repository';

@Injectable()
export class ReviewService {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async create(itemId: number, userId: number, dto: CreateReviewDto) {
    const review = await this.reviewRepository.create(
      new ReviewEntity({
        ...dto,
        itemId,
        userId
      })
    );

    return fillObject(ReviewRdo, review)
  }

  async findAll(itemId: number, page: number) {
    const reviews = await this.reviewRepository.findMany(itemId, page);

    return reviews.map((review) => fillObject(ReviewRdo, review))
  }
}
