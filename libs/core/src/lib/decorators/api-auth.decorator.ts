import { Service } from "@guitar-shop/shared-types"
import { applyDecorators, UseGuards } from "@nestjs/common"
import { ApiBearerAuth } from "@nestjs/swagger"
import { JwtAuthGuard } from "../guards/jwt-auth.guard"

export const ApiAuth = (service: Service) => {
  return applyDecorators(
    ApiBearerAuth(service),
    UseGuards(JwtAuthGuard)
  )
}
