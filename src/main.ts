import { NestFactory } from '@nestjs/core';
import { AppModule } from '../test/with-register/app.module'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3232);
}
bootstrap();
