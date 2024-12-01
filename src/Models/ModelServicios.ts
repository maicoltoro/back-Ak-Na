import { DataTypes, Model } from "sequelize";
import sequelize from '../config/database';
import { InterServicios } from "../interface/interfaceModels";

class ModelServicios extends Model<InterServicios> implements InterServicios {
    public Id!: number;
    public Tipo!: string;
}

ModelServicios.init({
    Id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    Tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'servicios',
    timestamps: false,
});

export default ModelServicios;
