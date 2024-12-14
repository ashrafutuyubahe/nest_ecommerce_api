import { Entity, PrimaryGeneratedColumn, Column, EntityRepository } from 'typeorm'; 
import { Repository } from 'typeorm';
import { Product } from './schemas/product.schema'; // Import Product schema



@EntityRepository(Product)
export class ProductRepository extends Repository<Product>{

  async findAllProducts():Promise<Product[]>{
      return this.find();
  }


}