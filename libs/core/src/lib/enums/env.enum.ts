export enum ENVError {
  APIPort = 'API port is required',
  SMTPHost = 'SMTP server host is required',
  SMTPUser = 'SMTP server user is required',
  SMTPPass = 'SMTP server password is required',
  SMTPPort = 'SMTP server port is required',
  MailFrom = 'Mail "from" address is required',
  PrismaDBUrl = 'Database url is required',
  UploadDir = 'Upload directory path is required',
  JwtSecret = 'Jwt secret key is required',
  RMQHost = 'RabbitMQ host is required',
  RMQUser = 'RabbitMQ user is required',
  RMQPass = 'RabbitMQ password is required',
  RMQSubscriberQueue = 'RabbitMQ Subscribers Queue is required',
  PortInvalid = 'Port value is invalid'
}
export enum EnvFilePath {
  Shop = 'apps/shop/.env',
  Notify = 'apps/notify/.env',
}
