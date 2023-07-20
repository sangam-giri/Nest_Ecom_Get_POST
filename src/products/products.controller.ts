import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductsServices } from "./product.service";
import { Products } from "./schema/products.schema";
import { CreateProductDto } from "./dto/create-product.dto";

@Controller()
export class ProductsController{
    constructor(private productsService:ProductsServices){}

    @Get()
    async getAllProducts():Promise<Products[]>{
     return this.productsService.findAll()   
    }

    @Post()
    async createProduct(
        @Body() products:CreateProductDto):Promise<Products>{
            return this.productsService.create(products);
        }
    
}