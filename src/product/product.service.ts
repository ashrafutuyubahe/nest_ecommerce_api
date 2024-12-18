import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './schemas/product.schema';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}


  async findAllProducts() {
   
      return this.productRepository.findAllProducts;
    
  }

  



  
  async addProduct(createProductDto: CreateProductDto) {
    const createdProduct = this.productRepository.create(createProductDto);
    console.log(createProductDto);

    if (this.productRepository.save(createdProduct)) {
      return this.productRepository.save(createdProduct);
    }

    return 'failed to add a product';
  }
}
