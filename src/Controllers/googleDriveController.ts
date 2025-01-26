import path from 'path';
import { google } from 'googleapis';
import { Stream } from 'stream';
import { start } from "../config/Conection";
import ModelImagenProyecto from '../Models/ModelImagenesProyecto';

const KEYFILEPATH = path.join("src\\config" + '\\credentials.json');
const SCOPRES = ['https://www.googleapis.com/auth/drive'];

const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPRES,
});

export class googleDriveController {
    static async GetImage(req: any, res: any) {
        const { id } = req.params;
        try {
            await start();
            let Imagenes = await ModelImagenProyecto.findAll({
                where: {
                    $IdProyecto$: id
                }
            })
            res.json({ status: 200, response: Imagenes });
        } catch (error) {
            res.json({ status: 200, response: error });
        }
    }
}

export async function uploadFile(archivo: any, carpeta: string) {
    const bufferStream = new Stream.PassThrough()
    bufferStream.end(archivo.buffer)

    let datosCarpeta: any = await listFolders(carpeta);

    if (!datosCarpeta || datosCarpeta.length === 0) {
        throw new Error(`No se pudo encontrar ni crear la carpeta: ${carpeta}`);
    }

    let idCarpeta = datosCarpeta[0].id
    const { data } = await google.drive({
        version: 'v3',
        auth: auth
    }).files.create({
        media: {
            mimeType: archivo.mimeType,
            body: bufferStream
        },
        requestBody: {
            name: archivo.originalname,
            parents: [idCarpeta]
        },
        fields: 'id, name, webViewLink',
    })

    if (!data.id) {
        throw new Error('Error al subir el archivo: no se recibió un ID del archivo.');
    }

    await google.drive({
        version: 'v3',
        auth: auth,
    }).permissions.create({
        fileId: data.id,
        requestBody: {
            role: 'reader',
            type: 'anyone',
        },
    });

    return {
        name: data.name,
        id: data.id,
        webViewLink: data.webViewLink,
    };
}

async function listFolders(carpeta: string) {
    try {
        const drive = google.drive({ version: 'v3', auth });
        let parentFolderId = '1xTGH863-GP1G7uwpx3SJc95hzn15euSq'
        const response = await drive.files.list({
            q: `'${parentFolderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
            fields: 'files(id, name)',
        });
        const folders = response.data.files;
        let buscaCarpeta = folders?.filter(e => e.name == carpeta)
        if (buscaCarpeta?.length != 0) {
            return buscaCarpeta
        } else {
            const response = await drive.files.create({
                requestBody: {
                    name: carpeta,
                    mimeType: 'application/vnd.google-apps.folder',
                    parents: [parentFolderId],
                },
                fields: 'id, name',
            });

            return [{ id: response.data.id, name: response.data.name }];
        }
    } catch (error) {
        console.error('Error fetching folders:', error);
        throw error;
    }
}