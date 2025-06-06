import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PersonModule } from './person/person.module';
import { LoggerMiddleware } from './logger.middleware';
import { APP_GUARD } from '@nestjs/core';
import { PersonGuard } from './person/person.guard';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path from 'node:path';
import crypto from 'node:crypto';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    PersonModule,
    UserModule,
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = crypto.randomBytes(16).toString('hex');
          const filename = `${randomName}${path.extname(file.originalname)}`;
          cb(null, filename);
        },
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nodejs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      timezone: 'Z',
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: PersonGuard,
    },
  ],
  exports: [MulterModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
