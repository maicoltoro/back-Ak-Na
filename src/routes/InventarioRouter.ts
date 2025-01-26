import { Router } from "express";
import { InventarioController } from "../Controllers/InventarioController";

export const InventarioRouter = Router();
InventarioRouter.get('/getAll', InventarioController.getAllInventario)
InventarioRouter.get('/UpdateInventario', InventarioController.UpdateInventario)
InventarioRouter.post('/TraerInformacionPedido', InventarioController.TraerInfoPedidos)
InventarioRouter.post('/CambiarEstado', InventarioController.CambiarEstado)