import { NestFactory } from '@nestjs/core';
import { AppModule } from '../test/without-register/app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(8888);
}
bootstrap();
