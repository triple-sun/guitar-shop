import { TReview } from "@guitar-shop/front/types"
import { format } from "date-fns"
import ru from "date-fns/locale/ru"
import { RatingComponent } from "../rating-element/rating-element"

type TReviewElementProps = {
  review: TReview
}

export const ReviewElement = ({review}: TReviewElementProps) => {
  const {user, rating, pros, cons, comment, createdAt} = review
  const formattedDate = format(createdAt, 'd MMMM', {locale: ru})

  return (
    <div className="review">
      <div className="review__wrapper">
                <h4 className="review__title review__title--author title title--lesser">{user.name}</h4><span className="review__date">{formattedDate}</span>
              </div>
              <div className="rate review__rating-panel">
                <RatingComponent totalRating={rating} />
              </div>
              <h4 className="review__title title title--lesser">Достоинства:</h4>
              <p className="review__value">{pros}</p>
              <h4 className="review__title title title--lesser">Недостатки:</h4>
              <p className="review__value">{cons}</p>
              <h4 className="review__title title title--lesser">Комментарий:</h4>
              <p className="review__value">{comment}</p>
            </div>
  )
}
