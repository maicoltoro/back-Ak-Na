import { DataTypes, Model } from "sequelize";
import { InterValorEnvio } from "../interface/interfaceModels";
import sequelize from '../config/database';

class ModelValorEnvio extends Model<InterValorEnvio> implements InterValorEnvio {
    public ID!: number;
    public FechaActualizacion!: Date;
    public ValorEnvio!: number;
}

ModelValorEnvio.init(
    {
        ID: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        FechaActualizacion: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        ValorEnvio: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },
    {
        sequelize,
        tableName: 'ValorEnvio',
        timestamps: false,
    }
)

export default ModelValorEnvio