import { DataTypes, Model } from "sequelize";
import { InterInformacionPedidos } from "../interface/interfaceModels";
import sequelize from '../config/database';

class ModelInformacionPedidos extends Model<InterInformacionPedidos> implements InterInformacionPedidos {
    public IdPedido!: number;
    public Celular!: number;
    public Correo!: string;
    public Direccion!: string;
    public IdEstado!: number;
    public NombreCompleto!: string;
    public NumeroIdentificacion!: number;
    public SuscripcionNoticias!: number;
    public TipoIdentificacion!: number;
    public ValorCompra!: number;
}

ModelInformacionPedidos.init(
    {
        IdPedido: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        NombreCompleto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        TipoIdentificacion: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        NumeroIdentificacion: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        Correo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Celular: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        SuscripcionNoticias: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        ValorCompra: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        IdEstado: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        }
    },
    {
        sequelize,
        tableName: 'InformacionPedidos',
        timestamps: false,
    }
)

export default ModelInformacionPedidos;