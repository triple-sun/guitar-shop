import { Service, PortDefault } from "@guitar-shop/shared-types";
import { DocumentBuilder } from "@nestjs/swagger";

const getSwaggerConfig = (title: string, desc: string, version: string) => new DocumentBuilder()
  .setTitle(title)
  .setDescription(desc)
  .setVersion(version)
  .addBearerAuth()
  .build()


const getAPIConfig = (name: Service) => {
  const desc = `${name} service API`
  return {
    Name: name,
    Desc: desc,
    Port: process.env.API_PORT ?? PortDefault[name],
    Config: getSwaggerConfig(name, desc, '1.0')
}}

const APIConfig = {
  ShopAPI: getAPIConfig(Service.Shop),
  NotifyAPI: getAPIConfig(Service.Notify),
}

export const { ShopAPI, NotifyAPI } = APIConfig

