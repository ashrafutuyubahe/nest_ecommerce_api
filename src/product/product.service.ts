import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './schemas/product.schema';
import { ProductRepository } from './product.repository'; // Correct import


@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)  
    private readonly productRepository: ProductRepository, 
  ) {}

  async findAllProducts(): Promise<Product[]> {
    return await this.productRepository.findAllProducts();
  }
}
