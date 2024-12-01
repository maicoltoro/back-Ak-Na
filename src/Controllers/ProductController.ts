import { start } from "../config/Conection";
import ModelProducts from "../Models/ModelProducts";

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
}
