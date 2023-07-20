import { IsNotEmpty, IsString,IsNumber} from "class-validator";
export class CreateProductDto{
    @IsNotEmpty()
    @IsString()
    readonly productName:string;

    @IsNotEmpty()
    @IsString()
    readonly productDesc:string;

    @IsNotEmpty()
    @IsNumber()
    readonly oldPrice:number;

    @IsNotEmpty()
    @IsNumber()
    readonly newPrice:number;
}