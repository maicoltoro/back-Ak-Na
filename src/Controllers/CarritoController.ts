import { start } from "repl";
import sequelize from "../config/database";
import ModelTipoDocumento from "../Models/ModelTipoDocumento";
import { QueryTypes } from 'sequelize';
import { InterFactura } from "../interface/interfaceModels";
import { optionMail } from "../email/ConfigEmail";

export class CarritoController {

    static async GuardarCompra(req: any, res: any) {
        try {
            const data = req.body;
            const { nombre, correo, direccion, telefono, suscripcionNoticias, valorCompra, departamento, tipoIdentificacion, numeroIdentificacion, ...objfactura } = data;
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
            const idPedido = resultado.filter((e: any) => e == e)[0].IdPedido
            const facturaItems: InterFactura[] = Object.values(objfactura);
            for (const product of facturaItems) {
                await sequelize.query(`
                    EXEC [dbo].[Sp_InsertDetalleCompra]
                        @idPedido = :idPedido,
                        @IdProducto = :IdProducto,
                        @cantidad = :cantidad,
                        @DiaEntrega = :DiaEntrega,
                        @Tiempo = :Tiempo,
                        @Horainicio = :Horainicio,
                        @horaFin = :horaFin,
                        @precio  = :precio`,
                    {
                        replacements: {
                            idPedido,
                            IdProducto: product.ID,
                            cantidad: product.Cantidad,
                            DiaEntrega: product.DiaEntrega,
                            Tiempo: product.Tiempo,
                            Horainicio: product.HoraInicio,
                            horaFin: product.HoraFin,
                            precio: product.Precio,
                        },
                    }
                )
            }
            await optionMail(facturaItems, valorCompra, correo, "Confirmacion de pedido")
            res.json({ status: 200, response: idPedido })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }

    static async getAllTipoIdentificacion(req: any, res: any) {
        try {
            await start()
            let tipo = await ModelTipoDocumento.findAll()
            res.json({ status: 200, response: tipo });
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }
}

interface InsertarCompraResult {
    IdPedido: number;
}