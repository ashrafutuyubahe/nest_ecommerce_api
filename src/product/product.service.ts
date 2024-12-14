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

  async findAllProducts() {
    if(this.productRepository.findAllProducts!=null){
      return  this.productRepository.findAllProducts
    }
    return [];
  }


  async addProduct(NewProduct:Product): Promise<Product>{

    return this.productRepository.create(NewProduct);

   
  }
}
