import { Property } from "../enums/property.enum";
import { getSize } from "../utils/common.util";

const { Name, Model, Description, Password, Pros, Sku, Cons, Price, Comment, Rating, Port, MinPrice, MaxPrice } = Property

export const Size = {
    [Name]: getSize(15, 1),
    [Password]: getSize(12, 6),
    [Model]: getSize(100, 10),
    [Description]: getSize(1024, 20),
    [Sku]: getSize(40, 5),
    [Pros]: getSize(100, 50),
    [Cons]: getSize(100, 50),
    [Comment]: getSize(1024, 5),
    [Rating]: getSize(5, 1),
    [Price]: getSize(1000000, 100),
    [Port]: getSize(65535, 0),
    [MinPrice]: getSize(999999, 100),
    [MaxPrice]: getSize(1000000, 101)
}
