import nodemailer from 'nodemailer';

export const corsOptions = {
    origin: ['http://localhost:4200', '*'], // Lista de orígenes permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true, // Permitir el uso de cookies y cabeceras de autenticación
};
export const prueba = ""
export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,   
    secure :true,
    auth: {
        user: 'masterdevone@gmail.com',
        pass: 'frqb zqwa yazo pvpj',
    },
});

//NodeAkNa