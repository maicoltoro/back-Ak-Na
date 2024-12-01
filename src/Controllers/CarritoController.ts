import { start } from "repl";
import ModelInformacionPedidos from "../Models/ModelInformacionPedidos";
import sequelize from "../config/database";
import ModelTipoDocumento from "../Models/ModelTipoDocumento";
import { QueryTypes } from 'sequelize';
import { InterFactura } from "../interface/interfaceModels";

export class CarritoController {

    static async GuardarCompra(req: any, res: any) {
        try {
            const data = req.body;
            const { nombre, correo, direccion, telefono,suscripcionNoticias,valorCompra, departamento, tipoIdentificacion, numeroIdentificacion, ...objfactura } = data;
            await start()
            const resultado = await sequelize.query<InsertarCompraResult>(
                `
                EXEC [dbo].[Sp_InsertarDatosPersonalesCompra]
                    @Nombre = :nombre,
                    @TipoIdentificacion = :tipoIdentificacion,
                    @numeroIdentificacion = :numeroIdentificacion,
                    @correo = :correo,
                    @direccion = :direccion,
                    @celular = :telefono,
                    @SuscripcionNoticias = :suscripcionNoticias,
                    @valorCompra = :valorCompra,
                    @IdEstado = :idEstado
                `,
                {
                    type: QueryTypes.SELECT,
                    replacements: {
                        nombre,
                        tipoIdentificacion,
                        numeroIdentificacion,
                        correo,
                        direccion,
                        telefono,
                        suscripcionNoticias,
                        valorCompra,
                        idEstado: 1,
                    },
                }
            );
            //console.log( algo.IdPedido)
            const idPedido = resultado.filter((e : any) => e == e )[0].IdPedido
            const facturaItems : InterFactura[] = Object.values(objfactura);
            for (const product of facturaItems) {
                await sequelize.query(`
                    EXEC [dbo].[Sp_InsertDetalleCompra]
                        @idPedido = :idPedido,
                        @IdProducto = :IdProducto,
                        @cantidad = :cantidad,
                        @DiaEntrega = :DiaEntrega,
                        @Tiempo = :Tiempo,
                        @Horainicio = :Horainicio,
                        @horaFin = :horaFin`,
                    {
                        replacements: {
                            idPedido,
                            IdProducto: product.ID,
                            cantidad: product.Cantidad,
                            DiaEntrega: product.DiaEntrega,
                            Tiempo: product.Tiempo,
                            Horainicio: product.HoraInicio,
                            horaFin: product.HoraFin,
                        },
                    }
                )
            }
            res.json({status: 200 , response: idPedido})
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    static async getAllTipoIdentificacion(req: any, res: any){
        try {
            await start()
            let tipo = await ModelTipoDocumento.findAll()
            res.json(tipo);
        } catch (error) {
            res.status(500).json({ error});
        }
    }
}

interface InsertarCompraResult {
    IdPedido: number;
}