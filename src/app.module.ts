import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from "./product/schemas/product.schema"
import { ProductModule } from './product/product.module';

@Module({
  imports: [AuthModule, UsersModule, ProductModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'e_commerce',
      entities: [Product],
      synchronize: true, 
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

