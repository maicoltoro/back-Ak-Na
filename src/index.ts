import express from 'express';
import { CategoriesRouter } from './routes/CategoriesRouter';
import { CarritoRouter } from './routes/CarritoRouter';
import { corsOptions } from './Middleware/Middleware';
import cors from 'cors';
import { ProductRouter } from './routes/ProductRouter';
import { DiasRouter } from './routes/DiasRouter';
import { googleRouter } from './routes/googleRoutes';
import { LoginRouter } from './routes/LoginRouter';
import { graficasRouter } from './routes/GraficasRouter';
import { InventarioRouter } from './routes/InventarioRouter';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors(corsOptions));

app.use('/Categories', CategoriesRouter)
app.use('/Carrito', CarritoRouter)
app.use('/Product', ProductRouter)
app.use('/Dias', DiasRouter)
app.use('/google', googleRouter);
app.use('/Login', LoginRouter);
app.use('/Grafica', graficasRouter);
app.use('/Inventario', InventarioRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
