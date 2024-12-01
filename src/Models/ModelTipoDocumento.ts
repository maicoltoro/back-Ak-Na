import { DataTypes, Model } from "sequelize";
import { InterTipoIdentificacion } from "../interface/interfaceModels";
import sequelize from '../config/database';

class ModelTipoDocumento extends Model<InterTipoIdentificacion> implements InterTipoIdentificacion{
    public id!: number;
    public tipo!: string;
}

ModelTipoDocumento.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        sequelize,
        tableName: 'TipoDocumento',
        timestamps: false,
    }
)

export default ModelTipoDocumento