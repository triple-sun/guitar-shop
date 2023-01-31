import { StringCount } from "@prisma/client";
import { TApiPropArgs } from "../types/api-prop-args.type";
import { getApiProp } from "../utils/api.util";

export const ApiProp = {
  Common: (args: TApiPropArgs) => getApiProp(args),
  Str: (args: TApiPropArgs) => getApiProp(args, 'string'),
  Int: (args: TApiPropArgs) => getApiProp(args, 'number')
}

export enum StringCountNumber {
  Four = 4,
  Six = 6,
  Seven = 7,
  Twelve = 12
}

export const StringNumberToCount = {
  [StringCountNumber.Four]: StringCount.Four,
  [StringCountNumber.Six]: StringCount.Six,
  [StringCountNumber.Seven]: StringCount.Seven,
  [StringCountNumber.Twelve]: StringCount.Twelve
}
