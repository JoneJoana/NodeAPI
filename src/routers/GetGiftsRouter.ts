import {Router} from 'express';
import {getSimpleController, getToWhoController} from "../controllers/GetGiftsController";


const getGiftsRouter = Router();

getGiftsRouter.get('/gifts', getSimpleController);

getGiftsRouter.get('/gifts/:toWho', getToWhoController);

export default getGiftsRouter;