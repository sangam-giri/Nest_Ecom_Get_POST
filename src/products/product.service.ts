import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Products } from "./schema/products.schema";
import * as mongoose from "mongoose";

@Injectable()
export class ProductsServices{
    constructor(
        @InjectModel(Products.name)
        private productsModel:mongoose.Model<Products>
    ){}

    async findAll():Promise<Products[]>{
        const products=await this.productsModel.find()
        return products;
    }

    async create(products:Products):Promise<Products>{
        const res = await this.productsModel.create(products);
        return res;
    }
}