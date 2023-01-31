export enum Service {
  API = 'API',
  Shop = 'Shop',
  Mailer = 'Mailer',
  JWT = 'Jwt',
  RMQ = 'Rmq',
  Notify = 'Notify',
  Auth = 'Auth',
  Prisma = 'Prisma'
}

export enum Entity {
  Guitar = 'Guitar',
  Review = 'Review',
  Subscriber = 'Subscriber',
  User = 'User',
}

export enum PortDefault {
  Mailer = 5025,
  Postgres = 5432,
  Shop = 3333,
  Notify = 3334,
}
