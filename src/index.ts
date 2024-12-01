import express from 'express';
import getGiftsRouter from "./routers/getGiftsRouter";
import postGiftRouter from "./routers/PostGiftRouter";

const app = express();
const port = 3000;

app.use(getGiftsRouter);
app.use(postGiftRouter);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});