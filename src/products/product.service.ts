import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Products } from "./schema/products.schema";
import * as mongoose from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
// import { CreateProductDto } from "./dto/create-product.dto";
// import { UpdateProductDto } from "./dto/update-product.dto";

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

    async create(createProductDto:CreateProductDto):Promise<string>{
        await this.productsModel.create(createProductDto);
        return "Successfully Created";
    }

    async update(id:string,updateProductDto:UpdateProductDto):Promise<string>{
        await this.productsModel.findByIdAndUpdate(id,updateProductDto,{
            new:true,
            runValidators:true
        });
        return "Successfully Updated";
    }

    async delete(id:string):Promise<string>{
        await this.productsModel.findByIdAndDelete(id);
        return "Successfully Deleted";
    }

}
