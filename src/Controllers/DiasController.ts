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

            res.json(diasEntrega);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async getValorEnvio(req: any, res: any){
        try {
            await start();
            let Valor = await ModelValorEnvio.findAll()
            res.json(Valor);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}