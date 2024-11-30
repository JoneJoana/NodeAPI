import express from 'express';

const app = express();
const port = 3000;

const giftsList = [
    { name: "estufa" , toWho: "marta" },
    { name: "collar", toWho: "mama" }
];

app.use((req,res,next) => {
    console.log(`Solicitud recibida para ${req.url}`);
    next();
});

app.get('/gifts', (req, res) => {
    res.send(JSON.stringify(giftsList));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});