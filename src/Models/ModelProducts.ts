import { DataTypes, Model } from "sequelize";
import { InterProductos } from "../interface/interfaceModels";
import sequelize from '../config/database';

class ModelProducts extends Model<InterProductos> implements InterProductos {
    public Activo!: number;
    public Cantidaddescuento!: number;
    public Descripcion!: string;
    public Descuento!: number;
    public FechaFinDesc!: Date;
    public FechaInicioDesc!: Date;
    public ID!: number;
    public IdCategoria!: number;
    public IdMarca!: number;
    public IdServicio!: number;
    public Nombre!: string;
    public Precio!: number;
    public imagen!: string;
}

ModelProducts.init({
    Activo: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    Cantidaddescuento: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    Descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Descuento: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    FechaFinDesc: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    FechaInicioDesc: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    ID: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    IdCategoria: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    IdMarca: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    IdServicio: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Precio: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    }
},
    {
        sequelize,
        tableName: 'Productos',
        timestamps: false,
    }
)

export default ModelProducts