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
            res.json({status : 200 , response : categorias});
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }

    static async getProductCategoriess(req: any, res: any) {
        try {
            const { id } = req.params;
            await start()
            const marca = await sequelize.query(`
                EXEC [dbo].[Sp_FiltarPorCategoria] ${id}`,)
            res.json({status : 200 , response : marca});
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }
}