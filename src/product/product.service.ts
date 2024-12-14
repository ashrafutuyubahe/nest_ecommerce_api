import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './schemas/product.schema';
import { ProductRepository } from './product.repository'; // Correct import
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)  private productRepository: ProductRepository, 
  ) {}

  async findAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }
}
