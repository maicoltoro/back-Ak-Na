import { start } from "../config/Conection";
import ModelDias from "../Models/ModelDias";
import ModelValorEnvio from "../Models/ModelValorEnvio";

export class DiasController {

    static async getAll(req: any, res: any) {
        try {
            await start();
            let diasEntrega = await ModelDias.findAll({
                where: {
                    $activo$: 1
                }
            })
            res.json({ status: 200, response: diasEntrega })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }

    static async getValorEnvio(req: any, res: any) {
        try {
            await start();
            let Valor = await ModelValorEnvio.findAll()
            res.json({ status: 200, response: Valor })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }
}