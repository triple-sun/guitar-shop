export enum Service {
  API = 'API',
  Shop = 'Shop',
  Mailer = 'Mailer',
  JWT = 'Jwt',
  RMQ = 'Rmq',
  Notify = 'Notify',
  Auth = 'Auth',
  Prisma = 'Prisma',
  FormData = 'FormData'
}

export enum Entity {
  Guitar = 'Guitar',
  Review = 'Review',
  Order = 'Order',
  Subscriber = 'Subscriber',
  User = 'User',
}

export enum PortDefault {
  Mailer = 5025,
  Postgres = 5432,
  Shop = 3333,
  Notify = 3334,
}

export enum Path {
  Login = '/login',
  Verify = '/verify',
  Register = 'register'
}

export enum PropType {
  Str = 'Str',
  Num = 'Num',
  Comm = 'Comm'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum ItemSortBy {
  Date = 'createdAt',
  Price = 'price',
  Reviews = 'reviews'
 }

 export enum Limit {
  Items = 9,
  Reviews = 50,
  Orders = 6
 }
