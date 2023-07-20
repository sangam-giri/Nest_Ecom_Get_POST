import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsSchema } from "./schema/products.schema";
import { ProductsController } from "./products.controller";
import { ProductsServices } from "./product.service";

@Module({
    imports:[
        MongooseModule.forFeature([{name:'Products',schema:ProductsSchema}])
    ],
    controllers:[ProductsController],
    providers:[ProductsServices]
})
export class ProductsModule{}