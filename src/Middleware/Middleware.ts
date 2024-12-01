export const corsOptions = {
    origin: ['http://localhost:4200', 'https://mi-dominio.com'], // Lista de orígenes permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true, // Permitir el uso de cookies y cabeceras de autenticación
};