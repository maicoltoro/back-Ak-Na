import { Router } from "express";
import { LoginController } from "../Controllers/LoginController";
export const LoginRouter = Router();

LoginRouter.post('/inicioSesion',LoginController.inicioSesion)
LoginRouter.post('/actualizaContrasenna',LoginController.actualizaContrasenna)