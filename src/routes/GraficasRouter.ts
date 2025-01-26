import { Router } from "express";
import { GraficasController } from "../Controllers/GraficasController";

export const graficasRouter = Router();
graficasRouter.get('/GraficaVentasMes', GraficasController.graficaMesCantidad)
graficasRouter.get('/GraficaProductosMasVendidos', GraficasController.GraficaProductosMasVendidos)
graficasRouter.get('/GraficaClientesFrecuentes', GraficasController.GraficaClientesFrecuentes)
graficasRouter.get('/GraficaProductosCategoria', GraficasController.GraficaProductosPorCategoria)
graficasRouter.get('/GraficaDiasVenta', GraficasController.GraficaDiasVenta)