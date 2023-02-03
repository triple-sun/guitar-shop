import { ConfigModule, ConfigService, registerAs } from "@nestjs/config"
import { FileSystemStoredFile } from 'nestjs-form-data'
import { FormDataInterceptorConfig, NestjsFormDataAsyncOptions } from "nestjs-form-data/dist/interfaces"

export const formDataOptions = registerAs('formData', () => ({
  upload: process.env.UPLOAD_DIR,
}))

export const getFormDataConfig = (): NestjsFormDataAsyncOptions => ({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<FormDataInterceptorConfig>  => {
    return {
      storage: FileSystemStoredFile,
      fileSystemStoragePath: configService.get<string>('formData.upload'),
      autoDeleteFile: false,
      isGlobal: true
    }},
  inject: [ConfigService]
})
