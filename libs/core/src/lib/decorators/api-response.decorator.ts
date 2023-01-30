import { Service } from '@guitar-shop/shared-types';
import { applyDecorators } from '@nestjs/common';
import { ApiNotFoundResponse, ApiConflictResponse, ApiOkResponse, ApiResponseMetadata, ApiCreatedResponse } from '@nestjs/swagger';

export const ApiCommonResponses = (service: Service, {type, description}: ApiResponseMetadata) => {
  return applyDecorators(
    ApiCreatedResponse({type, description}),
    ApiOkResponse({type, description}),
    ApiNotFoundResponse({ description: `${service} was not found` }),
    ApiConflictResponse({ description: `Request conflicts with data already in service ${service}` }),
  )
}
