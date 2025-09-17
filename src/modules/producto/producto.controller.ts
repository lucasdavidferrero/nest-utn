import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { productos } from "./productos.data"
import { CrearProductoDto } from "./dto/crear-producto.dto"

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  obtenerProductos () {
    return {
      datos: productos
    }
  }

  @Get(":idProducto")
  obtenerProducto (@Param("idProducto") idProducto: string) {
    const idConvertido = Number(idProducto)
    const productoEncontrado = productos.find((elemento) => elemento.id === idConvertido)
    return {
      datos: productoEncontrado
    }
  }

  @Post()
  crearProducto (@Body() productoDto: CrearProductoDto) {
    const productoCreado = { nombre: productoDto.nombre, precio: productoDto.precio, id: 10 }
    productos.push(productoCreado)

    return {
      datos: productoCreado
    }
  }
}
