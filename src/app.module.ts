import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './app.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: 'pass',
      database: 'nest_todo',
      entities: [Task],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Task])
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}