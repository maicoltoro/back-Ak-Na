import { Router } from "express";
import { ProductController } from "../Controllers/ProductController";


export const ProductRouter = Router();
ProductRouter.get('/:id', ProductController.getAll)