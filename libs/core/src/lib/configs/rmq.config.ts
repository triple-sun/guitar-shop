import { ConfigService, registerAs } from "@nestjs/config";
import { RmqOptions, Transport } from "@nestjs/microservices";

export const rmqOptions = registerAs('rmq', () => ({
  user: process.env.RMQ_USER,
  pass: process.env.RMQ_PASS,
  host: process.env.RMQ_HOST,
  queue: process.env.RMQ_QUEUE,
  exchange: process.env.RMQ_EXCHANGE,
}));

export function getRmqConfig(configService: ConfigService): RmqOptions {
  return {
    transport: Transport.RMQ,
    options: {
      urls: [{
        hostname: configService.get<string>('rmq.host'),
        username: configService.get<string>('rmq.user'),
        password: configService.get<string>('rmq.pass'),

      }],
      queue: configService.get<string>('rmq.queue'),
      persistent: true,
      noAck: true,
      queueOptions: {
        durable: true,
      }
    }
  }
}
