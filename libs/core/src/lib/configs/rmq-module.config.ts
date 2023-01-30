import { Service } from "@guitar-shop/shared-types";
import { ConfigModule, ConfigService, registerAs } from "@nestjs/config";

export const rmqModuleConfig = registerAs(Service.RMQ, () => ({
  user: process.env.RMQ_USER,
  pass: process.env.RMQ_PASS,
  host: process.env.RMQ_HOST,
  queue: process.env.RMQ_QUEUE,
  exchange: process.env.RMQ_EXCHANGE,
}))

export const getRMQModuleConfig = (serviceName: string): IRMQServiceAsyncOptions => ({
  imports: [ConfigModule],
	inject: [ConfigService],
	useFactory: async (configService: ConfigService) => {
				return {
					exchangeName: configService.get<string>(`${Service.RMQ}.exchange`),
					connections: [
						{
							login: configService.get<string>(`${Service.RMQ}.user`),
							password: configService.get<string>(`${Service.RMQ}.pass`),
							host: configService.get<string>(`${Service.RMQ}.host`),
						},
					],
					queueName: configService.get<string>(`${Service.RMQ}.queue`),
          serviceName,
          queueOptions:{
            durable: true,
          },
          exchangeOptions:
          {
            durable: true
          },
          autoBindingRoutes: true,
          logMessages: true

				};
			},
})
