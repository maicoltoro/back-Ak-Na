import { Router } from "express";
import { CarritoController } from "../Controllers/CarritoController";

export const CarritoRouter = Router();

CarritoRouter.post('/', CarritoController.GuardarCompra )
CarritoRouter.get('/TipoIdentificacion', CarritoController.getAllTipoIdentificacion)