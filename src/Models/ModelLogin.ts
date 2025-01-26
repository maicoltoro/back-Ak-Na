import sequelize from '../config/database';
import { DataTypes, Model } from "sequelize";
import { InterLogin } from '../interface/interfaceModels';

class ModelLogin extends Model<InterLogin> implements InterLogin{
    public Contrasenna!: string;
    public Correo!: string;
    public Id!: number;
    public Rol!: number;
}

ModelLogin.init(
    {
        Contrasenna :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Correo : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Id : {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        Rol :{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    },{
        sequelize,
        tableName: 'Usuarios',
        timestamps: false,
    }
)

export default ModelLogin