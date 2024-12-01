import { DataTypes, Model } from "sequelize";
import { InterDias } from "../interface/interfaceModels";
import sequelize from '../config/database';

class ModelDias extends Model<InterDias> implements InterDias {
    public activo!: number;
    public dia!: string;
    public envioGratis!: number;
    public id!: number;
}

ModelDias.init(
    {
        activo: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        dia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        envioGratis: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        }
    },
    {
        sequelize,
        tableName: 'DiasEntrega',
        timestamps: false,
    }
)

export default ModelDias