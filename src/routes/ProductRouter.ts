import { Router } from "express";
import { ProductController } from "../Controllers/ProductController";

export const ProductRouter = Router();

ProductRouter.get('/:id', ProductController.getAll)
ProductRouter.get('/FilterMarca/:idMarca/:idCategoria', ProductController.getAllIdMarca)
ProductRouter.get('/Ultimos/Productos', ProductController.UltimosProductor)