import {
  IsInt,
  MinLength,
  MaxLength,
  IsDecimal,
  Min
} from 'class-validator';
import { Type } from 'class-transformer';

export class CrearProductoDto {
    @MinLength(10)
    @MaxLength(255)
    titulo: string

    @IsDecimal()
    @Type(() => Number)
    precio: string

    @MinLength(5)
    slug: string

    @IsInt()
    @Min(0, { message: "Ingrese un stock válido >= 0" })
    stock: number
}