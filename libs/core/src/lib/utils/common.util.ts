import { ClassConstructor, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";
import { APIEnvConfig } from "../configs/env.config";
import { Prefix } from "../enums/prefix.enum";
import { Service } from "../enums/utils.enum";

export const fillObject = <T, V>(dto: ClassConstructor<T>, obj: V) => plainToInstance(dto, obj, { excludeExtraneousValues: true });

export const toggleArrElement = <T>(array: T[], element: T) => array.indexOf(element) === -1 ? [...array, element] : array.slice(array.indexOf(element), 0)

export const capitalize = (str: string) => str.toString().charAt(0).toUpperCase() + str.slice(1);

export const mapArrToObject = <T, V>(arr: T[], mapFn: (item: T) => V) => Object.fromEntries(new Map(arr.map((item) => [item, mapFn(item)])))

export const getAppRunningString = (service: Service, port: string | number) => `🚀 ${service} service API is running on http://localhost:${port}/${Prefix.Global}. Swagger specification and interface: http://localhost:${port}/${Prefix.Spec}`

export const validateEnv = <T extends typeof APIEnvConfig>(envConfig: T) => (
  (config: Record<string, unknown>) => {
    const cfg = plainToInstance(
      envConfig,
      config,
      { enableImplicitConversion: true  },
    );

    const errors = validateSync(
      cfg,
      { skipMissingProperties: false }
    );

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    return cfg;
  }
)

export const getSize = (max: number, min: number) => ({ Max: max, Min: min })

export const getAverage = (array: number[]) => array.length > 0 ? array.reduce((a, b) => a + b) / array.length : 0
