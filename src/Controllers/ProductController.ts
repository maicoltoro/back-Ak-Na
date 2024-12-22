import { start } from "../config/Conection";
import ModelProducts from "../Models/ModelProducts";
import { Op } from 'sequelize';

export class ProductController {
    static async getAll(req: any, res: any){
        try {
            const { id } = req.params;
            await start()
            let products = await ModelProducts.findAll({
                where :{
                    $IdCategoria$ : parseInt(id),
                    $Activo$ : 1
                }
            })
            res.json(products)
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async getAllIdMarca(req: any, res: any){
        try {
            const { idMarca, idCategoria } = req.params;
            const idMarcaArray = idMarca.split(',').map((marca: string) => parseInt(marca.trim()));
            console.log(idMarcaArray)
            await start()
            let products = await ModelProducts.findAll({
                where :{
                    $IdCategoria$ : parseInt(idCategoria),
                    IdMarca: { [Op.in]: idMarcaArray },
                    $Activo$ : 1
                }
            })
            res.json(products)
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async UltimosProductor(req: any, res: any){
        try {
            await start()
            let products = await ModelProducts.findAll({
                where :{
                    $Activo$ : 1
                },limit : 4,
                order: [['FechaInsercion', 'DESC']],
            })
            res.json(products)
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}
