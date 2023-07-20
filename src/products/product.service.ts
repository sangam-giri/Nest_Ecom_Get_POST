import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Products } from "./schema/products.schema";
import * as mongoose from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductsServices {
    constructor(
        @InjectModel(Products.name)
        private productsModel: mongoose.Model<Products>
    ) { }

    async findAll(): Promise<Products[]> {
        const products = await this.productsModel.find()
        return products;
    }

    async create(createProductsDto: CreateProductDto): Promise<CreateProductDto> {
        const res = await this.productsModel.create(createProductsDto);
        return res;
    }

    async updateById(id: string, updateProductsDto: UpdateProductDto): Promise<UpdateProductDto> {
        return await this.productsModel.findByIdAndUpdate(id, updateProductsDto, {
            new: true,
            runValidators: true
        });
    }

    async deleteById(id: string): Promise<Products> {
        return await this.productsModel.findByIdAndDelete(id);
    }
}
