import sequelize from '../config/database';
import { DataTypes, Model } from "sequelize";
import { InterInventario } from '../interface/interfaceModels';
import ModelProducts from './ModelProducts';

class ModelInventario extends Model<InterInventario> implements InterInventario {
    public Id!: number;
    public cantidad!: number;
    public idProducto!: number;
    public FechaActualizacion! : Date
}

ModelInventario.init(
    {
        Id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        cantidad: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        idProducto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FechaActualizacion : {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'Inventario',
        timestamps: false,
    }
)
export default ModelInventario;