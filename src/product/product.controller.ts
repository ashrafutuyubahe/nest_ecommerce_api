import { Controller, Get } from '@nestjs/common';
import { Product } from './schemas/product.schema';
import { ProductService } from './product.service';

@Controller('e-comerce_api/v1')
export class ProductController {
  constructor(
  private productService:ProductService
  ){}
  


    @Get('products')
    async getAllProducts(){
       return this.productService.findAllProducts();

      

    }

}
