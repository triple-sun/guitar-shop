import { Property } from '../enums/property.enum';
import { IEntity } from '../interfaces/entity.interface';
import { IReview } from '../interfaces/review.interface';

const { Pros, Cons, Comment, Rating, UserId, ItemId } = Property

export class ReviewEntity implements IEntity<IReview> {
  public [Pros]: string
  public [Cons]: string
  public [Comment]: string
  public [Rating]: number
  public [UserId]: number
  public [ItemId]: number

  constructor(review: IReview) {
    this.fillEntity(review);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(review: IReview) {
    this[Pros] = review[Pros];
    this[Cons] = review[Cons];
    this[Comment] = review[Comment];
    this[Rating] = review[Rating];
    this[UserId] = review[UserId];
    this[ItemId] = review[ItemId];
  }
}
