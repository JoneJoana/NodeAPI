import express from 'express';
import getGiftsRouter from "./routers/GetGiftsRouter";
import postGiftsRouter from "./routers/PostGiftsRouter";

const app = express();
const port = 3000;

app.use(getGiftsRouter);
app.use(postGiftsRouter);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});