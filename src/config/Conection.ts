import sequelize from "./database"; 

export const start = async () =>{
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.error('Error al conectar o sincronizar:', error);
    }
}