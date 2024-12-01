import sequelize from "./database"; 

export const start = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos exitosa.');

    } catch (error) {
        console.error('Error al conectar o sincronizar:', error);
    }
}