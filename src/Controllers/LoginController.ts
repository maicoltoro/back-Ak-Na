import { start } from "../config/Conection";
import ModelLogin from "../Models/ModelLogin";

export class LoginController {
    static async inicioSesion(req: any, res: any) {
        const { correo, contrasenna } = req.body
        try {
            await start();
            let sesion = await ModelLogin.findAll({
                where: {
                    $Correo$: correo,
                    $Contrasenna$: contrasenna
                }
            })

            if (sesion.length > 0) res.json({ status: 200, response: "OK" })
            else res.json({ status: 401, response: "Inicio de sesion denegado" })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }

    static async actualizaContrasenna(req: any, res: any) {
        const { correo, contrasenna } = req.body
        try {
            await start();
            let sesion = await ModelLogin.findAll({
                where: {
                    $Correo$: correo,
                }
            })
            if (sesion.length > 0) {
                await ModelLogin.update({
                    Contrasenna: contrasenna
                }, {
                    where: {
                        $Correo$: correo
                    }
                })

                res.json({ status: 200, response: "OK" })
            }
            else res.json({ status: 401, response: "Usuario no encontrado" })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }
}

