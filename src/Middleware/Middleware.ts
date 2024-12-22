import nodemailer from 'nodemailer';

export const corsOptions = {
    origin: ['http://localhost:4200', 'https://mi-dominio.com'], // Lista de orígenes permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true, // Permitir el uso de cookies y cabeceras de autenticación
};

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,   
    secure :true,
    auth: {
        user: 'maicolestegantoro@gmail.com',
        pass: 'jbtz zgil djih nlic',
    },
});

//NodeAkNa