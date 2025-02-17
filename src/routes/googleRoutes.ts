import { Router } from "express";
import { googleDriveController, uploadFile, uploadFile2 } from "../Controllers/googleDriveController";
export const googleRouter = Router();
import multer from 'multer';
import { InventarioController } from "../Controllers/InventarioController";

const upload = multer();
googleRouter.post('/InsertFile', upload.any(), async (req: any, res: any) => {
    try {
        const { body, files } = req
        let respuesta = await uploadFile2(files[0], body.carpeta, body.proyecto)
        if (respuesta != null) {
            let url = respuesta.toString()
            await InventarioController.InsertProdcuto(body, url)
            res.send({ status: 200, response: respuesta })
        }
    } catch (error) {
        res.send({ status: 500, response: error })
    }
})
    
googleRouter.get('/TraerImagenes/:id', googleDriveController.GetImage)