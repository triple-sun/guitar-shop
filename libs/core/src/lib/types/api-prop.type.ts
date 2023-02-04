import { ApiPropertyOptions } from "@nestjs/swagger"
import { GuitarType, StringCount } from "@prisma/client"
import { Property } from "../enums/property.enum"
import { Entity } from "../enums/utils.enum"

const { Id, Email, ItemId, Strings, Type, ItemIds, Page, Photo, CreatedAt } = Property

type TCommProps = Property.Email | Property.Type | Property.Strings | Property.ItemId | Property.Id | Property.Photo | Property.CreatedAt | Property.Page | Property.ItemIds
type TNumProps = Property.Count | Property.Rating | Property.TotalPrice | Property.TotalRating | Property.Price | Property.OrderPrice
type TStrProps = Property.Sku | Property.Model | Property.Description | Property.Pros | Property.Cons | Property.Comment | Property.Password | Property.Name

export type TProps = TCommProps | TNumProps | TStrProps

export type TApiPropArgs = {
  ent: Entity,
  prop: Property,
  extra?: ApiPropertyOptions
}

type TExamples<T extends TProps, V extends number | string | Date | number[]> = Pick<Record<Property, V>, T>

export type TNumExamples = TExamples<TNumProps, number>

export interface ICommExamples extends TExamples<TCommProps, number | string | Date | number[] | StringCount | GuitarType> {
    [Id]: number
    [Email]: string
    [Type]: GuitarType,
    [Strings]: StringCount,
    [ItemIds]: number[],
    [ItemId]: number,
    [Photo]: string,
    [CreatedAt]: Date,
    [Page]: number,
}

export type TStrExamples = TExamples<TStrProps, string>

export type TApiExamples = ICommExamples | TNumExamples | TStrExamples
