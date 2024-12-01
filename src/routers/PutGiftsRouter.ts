import Router from 'express';
import {PutGiftsController} from "../controllers/PutGiftsController";

const putGiftsRouter = Router();
const putGiftsController = new PutGiftsController();

putGiftsRouter.put('/gift/:pos', putGiftsController.put);

export default putGiftsRouter;
