import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { ProductsServices } from "./product.service";
import { Products } from "./schema/products.schema";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller()
export class ProductsController {
    constructor(private productsService: ProductsServices) { }

    @Get()
    async getAllProducts(): Promise<Products[]> {
        return this.productsService.findAll()
    }

    @Post()
    async createProduct(
        @Body() createProductDto: CreateProductDto): Promise<CreateProductDto> {
        return this.productsService.create(createProductDto);
    }

    @Put(':id')
    async updateProducts(
        @Param('id')
        id: string,
        @Body()
        updateProductsDto: UpdateProductDto,): Promise<UpdateProductDto> {
        return this.productsService.updateById(id, updateProductsDto);
    }


    @Delete(':id')
    async deleteProducts(
        @Param('id') id: string
    ): Promise<Products> {
        return this.productsService.deleteById(id);
    }
}