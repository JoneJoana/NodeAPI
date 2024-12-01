import Router from 'express';
import {putGiftsController} from "../controllers/PutGiftsController";

const putGiftsRouter = Router();

putGiftsRouter.put('/gift/:pos', putGiftsController);

export default putGiftsRouter;
