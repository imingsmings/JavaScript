import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [UserModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
