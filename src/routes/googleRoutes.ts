import { Router } from "express";
import { googleDriveController, uploadFile } from "../Controllers/googleDriveController";
export const googleRouter = Router();
import multer from 'multer';
import { InventarioController } from "../Controllers/InventarioController";

const upload = multer();
googleRouter.post('/InsertFile', upload.any(), async (req: any, res: any) => {
    try {
        const { body, files } = req
        let respuesta = await uploadFile(files[0], body.carpeta)
        if (respuesta != null) {
            let url = `https://drive.google.com/thumbnail?id=${respuesta.id}`
            await InventarioController.InsertProdcuto(body, url)
            res.send({ status: 200, response: `Se creo el archivo correctamente https://drive.google.com/thumbnail?id=${respuesta.id}` })
        }
    } catch (error) {
        res.send({ status: 500, response: error })
    }
})

googleRouter.get('/TraerImagenes/:id', googleDriveController.GetImage)