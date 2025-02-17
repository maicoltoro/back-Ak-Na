import { InterFactura } from "../interface/interfaceModels";
import { transporter } from "../Middleware/Middleware";

export async function optionMail(datos: InterFactura[], valorCompra :string, destinatario: string , asunto : string) {

    let productos = ""
    
    for (let index = 0; index < datos.length; index++) {
        productos += `
        <tr>
            <td>
                <img src="${datos[index].Imagen}" alt="Laptop Inspiron">${datos[index].Nombre}
            </td>
            <td>${datos[index].Cantidad}</td>
            <td>$ ${datos[index].Precio}</td>
        </tr>
        `
    }
    let mensaje = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Factura</title>
            <style>
                body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f9f9f9;
                }
                .container {
                width: 100%;
                max-width: 800px;
                margin: 20px auto;
                background: #fff;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
                }
                .table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
                }
                .table th, .table td {
                border: 1px solid #ddd;
                padding: 10px;
                text-align: left;
                }
                .table th {
                background-color: #f4f4f4;
                }
                .table img {
                width: 50px;
                height: auto;
                }
                .summary {
                text-align: right;
                }
                .summary div {
                margin-bottom: 10px;
                }
                .total {
                font-weight: bold;
                font-size: 18px;
                }
                .btn-confirm {
                display: inline-block;
                background-color: black;
                color: white;
                text-align: center;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 4px;
                margin-top: 20px;
                }
            </style>
            </head>
        <body>
            <div class="container">
                <h2>Factura de Compra</h2>
                <table class="table">
                <thead>
                    <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    ${productos}                   
                </tbody>
                </table>
                <div class="summary">
                <div>Día Entrega: ${datos[0].DiaEntrega}</div>
                <div class="total">Valor Total: $ ${valorCompra}</div>
                </div>
            </div>
        </body>
    </html>
    `
    return await EnvioMail(destinatario,asunto,mensaje)
}

export async function EnvioMailEstado(estado: string, destinatario: string, asunto: string, NOMBRE_CLIENTE: string, NUMERO_PEDIDO: number) {

    let mensaje = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Estado de tu pedido</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    background-color: #007bff;
                    padding: 15px;
                    color: white;
                    font-size: 20px;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                }
                .content {
                    padding: 20px;
                    text-align: center;
                    color: #333;
                }
                .content p {
                    font-size: 16px;
                    line-height: 1.5;
                }
                .status {
                    font-size: 18px;
                    font-weight: bold;
                    color: #28a745;
                }
                .footer {
                    margin-top: 20px;
                    text-align: center;
                    font-size: 14px;
                    color: #777;
                }
                .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 15px;
                }
                .btn:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>

            <div class="container">
                <div class="header">
                    Notificación de Cambio de Estado del Pedido
                </div>
                <div class="content">
                    <p>Hola <strong>${NOMBRE_CLIENTE}</strong>,</p>
                    <p>Tu pedido con el número <strong>${NUMERO_PEDIDO}</strong> ha cambiado de estado.</p>
                    <p>El nuevo estado es: <span class="status">${estado}</span></p>
                    <p>Por favor estar pendiente de proxima informacion</p>
                </div>
            </div>
        </body>
        </html>
    `
    return await EnvioMail(destinatario,asunto,mensaje)
}

async function EnvioMail(destinatario : string , asunto : string, mensaje : string ){
    const mailOptions = {
        from: 'masterdevone@gmail.com',
        to: destinatario,
        bcc: 'dahianaballesteros2002@gmail.com',
        subject: asunto,
        html: mensaje
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        return info.response
    } catch (error) {
        return error
    }
}