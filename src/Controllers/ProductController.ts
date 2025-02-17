import { start } from "../config/Conection";
import ModelInventario from "../Models/ModelInventario";
import ModelProducts from "../Models/ModelProducts";
import { Model, Op } from 'sequelize';

export class ProductController {
    static async getAll(req: any, res: any) {
        try {
            const { id } = req.params;
            await start()
            let products = await ModelProducts.findAll({
                where: {
                    $IdCategoria$: parseInt(id),
                    $Activo$: 1
                },
                include : [
                    {
                        model : ModelInventario,
                        as: 'Inventario',
                    }
                ]
            })
            res.json({ status: 200, response: products })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }

    static async getAllIdMarca(req: any, res: any) {
        try {
            const { idMarca, idCategoria } = req.params;
            const idMarcaArray = idMarca.split(',').map((marca: string) => parseInt(marca.trim()));
            console.log(idMarcaArray)
            await start()
            let products = await ModelProducts.findAll({
                where: {
                    $IdCategoria$: parseInt(idCategoria),
                    IdMarca: { [Op.in]: idMarcaArray },
                    $Activo$: 1
                }
            })
            res.json({ status: 200, response: products })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }

    static async UltimosProductor(req: any, res: any) {
        try {
            await start()
            let products = await ModelProducts.findAll({
                where: {
                    $Activo$: 1
                }, limit: 4,
                order: [['FechaInsercion', 'DESC']],
                include : [
                    {
                        model : ModelInventario,
                        as: 'Inventario',
                    }
                ]
            })
            res.json({ status: 200, response: products })
        } catch (error) {
            console.log(error)
            res.json({ status: 500, response: error })
        }
    }
}
