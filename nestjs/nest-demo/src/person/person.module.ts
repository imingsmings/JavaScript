import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { PersonMiddleware } from './person.middleware';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
  exports: [PersonService],
})
export class PersonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 对所有person路由生效
    consumer.apply(PersonMiddleware).forRoutes(PersonController);
  }
}
