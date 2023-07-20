import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})
export class Products{

    @Prop()
    productName:string;

    @Prop()
    productDesc:string;

    @Prop()
    oldPrice:number;

    @Prop()
    newPrice:number;
}

export const ProductsSchema=SchemaFactory.createForClass(Products)