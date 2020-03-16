import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import peerServer from './peerServer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(peerServer)
  await app.listen(3000);

}
bootstrap();
