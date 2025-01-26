import { InterImagenesProyecto } from "../interface/interfaceModels";
import sequelize from '../config/database';
import { DataTypes, Model } from "sequelize";

class ModelImagenProyecto extends Model<InterImagenesProyecto> implements InterImagenesProyecto {
    public ID!: number;
    public IdProyecto!: number;
    public LugarImagen!: string;
    public UrlImagen !: string;
}

ModelImagenProyecto.init(
    {
        ID: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        IdProyecto: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        LugarImagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        UrlImagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'ImagenesProyecto',
        timestamps: false,
    }
)
export default ModelImagenProyecto