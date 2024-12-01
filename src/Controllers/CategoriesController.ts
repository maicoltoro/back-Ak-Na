import { start } from "../config/Conection";
import ModelCategorias from "../Models/ModelCategorias";

export class CategoryController {

    static async getAll(req: any, res: any) {
        try {
            await start();
            const categorias = await ModelCategorias.findAll({
                where: {
                    '$Activa$': true
                }
            });
            res.json(categorias);
        } catch (error) {
            res.status(500).json({ error});
        }
    }

}