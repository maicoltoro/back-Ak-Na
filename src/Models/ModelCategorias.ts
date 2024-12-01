import { DataTypes, Model } from "sequelize";
import { InterCategorias } from "../interface/interfaceModels";
import sequelize from '../config/database';

class ModelCategorias extends Model<InterCategorias> implements InterCategorias {
    public ID!: number;
    public IdServicio!: number | null;
    public Nombre!: string;
    public Activa!: number;
    public imagen!: string;
}

ModelCategorias.init({
    ID: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    IdServicio: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true, 
    },
    Activa : {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true, 
    },
    imagen :{
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        sequelize,
        tableName: 'Categorias',
        timestamps: false,
    }
)

export default ModelCategorias;