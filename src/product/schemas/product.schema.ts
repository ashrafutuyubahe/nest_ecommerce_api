import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productId:number;
  @Column()
  productName: string;

  @Column()
  productPrice: number;
  @Column()
  productOwner: string;

  @Column()
  productLocation: string;
}
