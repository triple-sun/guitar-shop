import { applyDecorators, Type, UseGuards, UseInterceptors } from "@nestjs/common"
import { AnyFilesInterceptor } from "@nestjs/platform-express"
import { ApiBearerAuth, ApiBody, ApiConsumes } from "@nestjs/swagger"
import { Entity, Service } from "../enums/utils.enum"
import { JwtAuthGuard } from "../guards/jwt-auth.guard"

export const ApiAuth = (service: Service | Entity) => {
  return applyDecorators(
    ApiBearerAuth(service),
    UseGuards(JwtAuthGuard)
  )
}

export const ApiFormData = (dto: Type<unknown>) => {
  return applyDecorators(
    ApiConsumes('multipart/form-data'),
    ApiBody({type: dto}),
    UseInterceptors(
      AnyFilesInterceptor()
    )
  )
}
