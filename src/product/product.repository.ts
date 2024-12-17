import { Entity, PrimaryGeneratedColumn, Column, EntityRepository } from 'typeorm'; 
import { Repository } from 'typeorm';
import { Product } from './schemas/product.schema'; // Import Product schema



export class ProductRepository extends Repository<Product>{

  async findAllProducts():Promise<Product[]>{
      return this.find();
  }


}