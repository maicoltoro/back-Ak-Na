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
    const mailOptions = {
        from: 'maicolestegantoro@gmail.com', // cambiar
        to: destinatario,
        subject: asunto,
        amp: mensaje
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        return info.response
    } catch (error) {
        return 'error'
    }
}