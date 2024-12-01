import { Router } from "express";
import { CategoryController } from "../Controllers/CategoriesController";

export const CategoriesRouter = Router();

CategoriesRouter.get('/', CategoryController.getAll)