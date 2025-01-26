import { start } from "../config/Conection";
import sequelize from "../config/database";
import { QueryTypes } from 'sequelize';
import { Sp_GraficaProductosMasVendidos, Sp_GraficaMesCantidadVentas, Sp_GraficaProductosPorCategoria, Sp_GraficaClientesFrecuentes, Sp_GraficaDiasVenta } from "../interface/interfaceSp";

export class GraficasController {
    static async graficaMesCantidad(req: any, res: any) {
        try {
            await start();
            let datos = await sequelize.query<Sp_GraficaMesCantidadVentas>(
                `EXEC [dbo].[Sp_GraficaMesCantidadVentas]`, {
                type: QueryTypes.SELECT,
                replacements: {}
            });
            res.json({ status: 200, response: datos })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }

    static async GraficaProductosMasVendidos(req: any, res: any) {
        try {
            await start()
            let datos = await sequelize.query<Sp_GraficaProductosMasVendidos>(
                `EXEC [dbo].[Sp_Grafica_ProductosMasVendidos]`, {
                type: QueryTypes.SELECT,
                replacements: {}
            });
            res.json({ status: 200, response: datos })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }

    static async GraficaProductosPorCategoria(req: any, res: any) {
        try {
            await start()
            let datos = await sequelize.query<Sp_GraficaProductosPorCategoria>(
                `EXEC [dbo].[Sp_GraficaProductosPorCategoria]`, {
                type: QueryTypes.SELECT,
                replacements: {}
            });
            res.json({ status: 200, response: datos })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }

    static async GraficaClientesFrecuentes(req: any, res: any) {
        try {
            await start()
            let datos = await sequelize.query<Sp_GraficaClientesFrecuentes>(
                `EXEC [dbo].[Sp_GraficaClientesFrecuentes]`, {
                type: QueryTypes.SELECT,
                replacements: {}
            });
            res.json({ status: 200, response: datos })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }

    static async GraficaDiasVenta(req: any, res: any) {
        try {
            await start()
            let datos = await sequelize.query<Sp_GraficaDiasVenta>(
                `EXEC [dbo].[Sp_GraficaDiasVenta]`, {
                type: QueryTypes.SELECT,
                replacements: {}
            });
            res.json({ status: 200, response: datos })
        } catch (error) {
            res.json({ status: 500, response: error })
        }
    }
}