import Router from 'express';
import {PutGiftsController} from "../controllers/PutGiftsController";

const putGiftsRouter = Router();
const putGiftsController = new PutGiftsController();

putGiftsRouter.put('/gift/:id', putGiftsController.put.bind(putGiftsController));

export default putGiftsRouter;
