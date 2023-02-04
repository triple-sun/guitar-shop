import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { GuitarModule } from '../guitar/guitar.module';
import { ReviewRepository } from './review.repository';
import { GuitarRepository } from '../guitar/guitar.repository';

@Module({
  imports: [GuitarModule],
  controllers: [ReviewController],
  providers: [ReviewService, ReviewRepository, GuitarRepository],
})
export class ReviewModule {}
