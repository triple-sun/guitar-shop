import { TGuitar } from "./guitar.type"
import { TUser } from "./user.type"

export type TReview = {
  id: number
  createdAt: Date
  pros: string
  cons: string
  comment: string
  rating: number
  user: TUser
  item: TGuitar
}
