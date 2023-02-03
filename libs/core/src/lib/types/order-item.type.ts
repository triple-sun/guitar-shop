import { Guitar } from "@prisma/client";

export type TOrderItem = {
  item: Guitar,
  count: number
}

export type TOrderItems = Record<number, TOrderItem>
