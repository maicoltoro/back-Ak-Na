import { start } from "../config/Conection";
import ModelCategorias from "../Models/ModelCategorias";
import sequelize from "../config/database";

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
            res.status(500).json({ error });
        }
    }

    static async getProductCategoriess(req: any, res: any) {
        try {
            const { id } = req.params;
            await start()
            const marca = await sequelize.query(`
                EXEC [dbo].[Sp_FiltarPorCategoria] ${id}`,)
            res.json(marca);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}