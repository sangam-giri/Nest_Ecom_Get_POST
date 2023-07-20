import { Body, Controller, Get, Param, Post, Put,Delete } from "@nestjs/common";
import { ProductsServices } from "./product.service";
import { Products } from "./schema/products.schema";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

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
    
        @Put(':id')
        async updateProducts(
            @Param('id')
            id:string,
            @Body()
             book:UpdateProductDto,):Promise<Products>{
        return this.productsService.updateById(id,book);
        }


        @Delete(':id')
        async deleteProducts(
            @Param('id') id:string
        ):Promise<Products>{
            return this.productsService.deleteById(id);
        }
}