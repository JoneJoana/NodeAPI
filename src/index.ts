import express from 'express';
import getGiftsRouter from "./routers/getGiftsRouter";

const app = express();
const port = 3000;

app.use(getGiftsRouter);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});