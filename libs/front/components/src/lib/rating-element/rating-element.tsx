import { getRatingStringAndArray } from "@guitar-shop/front/utils"

type TItemRatingElementProps = {
  totalRating: number;
  reviewCount?: number;
}

export const RatingComponent = ({totalRating, reviewCount}: TItemRatingElementProps) => {
  const {ratingString, ratingArray} = getRatingStringAndArray(totalRating)

  return (
    <>
        {ratingArray.map((rating) => <svg width="12" height="11" aria-hidden="true" key={rating}><use xlinkHref="#icon-star"></use></svg>)}
        <p className="visually-hidden">{`Оценка: ${ratingString}`}</p>
        {reviewCount
          ?  <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
          : <p/>
        }
    </>
  )
}
