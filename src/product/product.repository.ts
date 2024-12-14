import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'; 
import { Repository } from 'typeorm';
import { Product } from './schemas/product.schema'; // Import Product schema



@Entity()
export class ProductRepository extends Repository<Product>{

    finddAll(){}


}