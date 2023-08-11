import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { ProductsServices } from "./product.service";
import { Products } from "./schema/products.schema";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
// import { CreateProductDto } from "./dto/create-product.dto";
// import { UpdateProductDto } from "./dto/update-product.dto";

@Controller()
export class ProductsController {
    constructor(private productsService: ProductsServices) { }

    @Get()
    async getAllProducts(): Promise<Products[]> {
        return this.productsService.findAll()
    }

    @Post()
    async create(@Body() createProductDto:CreateProductDto):Promise<string>{
        return this.productsService.create(createProductDto);
    }

    @Put(":id")
    async update(@Param('id') id:string, @Body() updateProductDto:UpdateProductDto):Promise<string>{
    return await this.productsService.update(id,updateProductDto);
    }

    @Delete(":id")
    async delete(@Param("id") id:string){
        return await this.productsService.delete(id);
    }


    // @Delete(':id')
    // async deleteProducts(
    //     @Param('id') id: string
    // ): Promise<Products> {
    //     return this.productsService.deleteById(id);
    // }
}