import {  IsString, IsNumber, IsOptional } from "class-validator";
export class UpdateProductDto {
    @IsOptional()
    @IsString()
    readonly productName: string;

    @IsOptional()
    @IsString()
    readonly productDesc: string;

    @IsOptional()
    @IsNumber()
    readonly oldPrice: number;

    @IsOptional()
    @IsNumber()
    readonly newPrice: number;
}