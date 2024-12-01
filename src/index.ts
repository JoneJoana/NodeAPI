import express from 'express';
import getGiftsRouter from "./routers/GetGiftsRouter";
import postGiftsRouter from "./routers/PostGiftsRouter";
import putGiftsRouter from "./routers/PutGiftsRouter";
import patchGiftsRouter from "./routers/PatchGiftsRouter";
import deleteGiftsRouter from "./routers/DeleteGiftsRouter";

const app = express();
const port = 3000;

app.use(express.json()); // to get json body
app.use(getGiftsRouter);
app.use(postGiftsRouter);
app.use(putGiftsRouter);
app.use(patchGiftsRouter);
app.use(deleteGiftsRouter);


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});