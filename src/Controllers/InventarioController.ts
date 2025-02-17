import { start } from "../config/Conection";
import sequelize from "../config/database";
import { QueryTypes } from 'sequelize';
import { Sp_Informacionfactura, Sp_InformacionPedido, Sp_traerInventario } from "../interface/interfaceSp";
import { EnvioMailEstado } from "../email/ConfigEmail";

export class InventarioController {
    static async getAllInventario(req: any, res: any) {
        try {
            await start();

            let datos = await sequelize.query<Sp_traerInventario>(
                `EXEC [dbo].[Sp_traerInventario]`, {
                type: QueryTypes.SELECT,
                replacements: {}
            });
            res.json({ status: 200, response: datos })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }

    static async UpdateInventario(req: any, res: any) {
        const { datos } = req.body
        try {
            await start();
            let respuesta = await sequelize.query<Sp_traerInventario>(
                `EXEC [dbo].[Sp_traerInventario]
                    @IdProducto = :IdProducto,
                    @Cantidad = :Cantidad,
                    @Nombre = :Nombre,
                    @precio = :precio,
                    @CantidadDescuento = :CantidadDescuento,
                    @fechaIni = :fechaIni,
                    @fechaFin = :fechaFin,
                    @Descripcion = :Descripcion,
                    @Activo = :Activo 
                `, {
                type: QueryTypes.SELECT,
                replacements: {
                    IdProducto: datos.ID,
                    Cantidad: datos.Cantidad,
                    Nombre: datos.Nombre,
                    precio: datos.Precio,
                    CantidadDescuento: datos.CantidadDescuento,
                    fechaIni: datos.fechaIni,
                    fechaFin: datos.fechaFin,
                    Descripcion: datos.Descripcion,
                    Activo: datos.Activo
                }
            });
            res.json({ status: 200, response: respuesta })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }

    static async InsertProdcuto(body: any, url: string) {
        try {
            await start();

            let respuesta = await sequelize.query<Object>(
                `EXEC [dbo].[Sp_InsertProdcuto]
                    @IdCategoria = :IdCategoria,
                    @Nombre = :Nombre,
                    @idMarca = :idMarca,
                    @precio = :precio,
                    @descuento = :descuento,
                    @CantidadDescuento = :CantidadDescuento,
                    @fechaInicio = :fechaInicio,
                    @fechaFin = :fechaFin,
                    @imagen = :imagen,
                    @Descripcion = :Descripcion,
                    @cantidad = :cantidad 
                `, {
                type: QueryTypes.SELECT,
                replacements: {
                    IdCategoria: parseInt(body.IdCategoria),
                    Nombre: body.Nombre,
                    idMarca: parseInt(body.idMarca),
                    precio: parseInt(body.precio),
                    descuento: parseInt(body.descuento),
                    CantidadDescuento: parseInt(body.CantidadDescuento),
                    fechaInicio: body.fechaInicio,
                    fechaFin: body.fechaFin,
                    imagen: url,
                    Descripcion: body.Descripcion,
                    cantidad: parseInt(body.cantidad),
                }
            });

        } catch (error) {
            console.log(error)
        }
    }

    static async TraerInfoPedidos(req: any, res: any) {
        const { body } = req
        try {
            await start();

            let respuestaPedido = await sequelize.query<Sp_InformacionPedido>(
                `EXEC [dbo].[Sp_InformacionPedido]
                    @mes = :mes
                `, {
                type: QueryTypes.SELECT,
                replacements: {
                    mes: body.mes,
                }
            });
            let pedidos = ''
            respuestaPedido.forEach(e => {
                pedidos += `${e.IdPedido},`
            })

            let respuestaFactura = await sequelize.query<Sp_Informacionfactura>(
                `EXEC [dbo].[Sp_Informacionfactura]
                    @idPedido = :idPedido
                `, {
                type: QueryTypes.SELECT,
                replacements: {
                    idPedido: pedidos,
                }
            });
            res.json({ status: 200, responsePedido: respuestaPedido, responseFactura: respuestaFactura })
        } catch (error) {
            console.log(error)
            res.json({ status: 500, response: error })
        }
    }

    static async CambiarEstado(req: any, res: any) {
        const { pedidos, idEstado, correo,nombreUsuario,estado } = req.body
        try {
            await start();
            await sequelize.query<Object>(
                `EXEC [dbo].[SP_ActualizarEstado]
                    @idEstado = :idEstado,
                    @idPedido = :idPedido
                `, {
                type: QueryTypes.SELECT,
                replacements: {
                    idPedido: pedidos,
                    idEstado: idEstado
                }
            });
            let response = await EnvioMailEstado( estado,correo, "Estado de tu pedido",nombreUsuario,pedidos )
            res.json({status: 200, response  })
        } catch (error) {
            console.log(error)
            res.json({ status: 500, response: error })
        }
    }
}