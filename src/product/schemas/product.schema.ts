import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productName: string;

  @Column()
  productPrice: number;
  @Column()
  productOwner: string;

  @Column()
  productLocation: string;
}
