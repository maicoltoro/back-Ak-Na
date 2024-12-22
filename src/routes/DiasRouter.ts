import { Router } from "express";
import { DiasController } from "../Controllers/DiasController";

export const DiasRouter = Router();

DiasRouter.get('/', DiasController.getAll)
DiasRouter.get('/ValorEnvio', DiasController.getValorEnvio)