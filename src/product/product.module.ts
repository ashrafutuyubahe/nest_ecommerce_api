import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { Product } from './schemas/product.schema'; // Ensure Product is imported

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository]),  // Register the repository here
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
