import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //! Security
  app.enableCors();
  app.use(helmet());

  //! openApi Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Organize Simple API')
    .setDescription(
      'Organize Simple is an API that allows you to organize your data in a way easy to use understand with power of large language model',
    )
    .setVersion('1.0')
    .addTag('organize-simple')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.enableVersioning({
  //   type: VersioningType.URI,
  // });
  await app.listen(3000);
}
bootstrap();
