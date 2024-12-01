import {Router} from 'express';
import {GetGiftsController} from "../controllers/GetGiftsController";

const getGiftsRouter = Router();
const getGiftsController = new GetGiftsController();

getGiftsRouter.get('/gifts', getGiftsController.GetAll.bind(getGiftsController));
getGiftsRouter.get('/gifts/:id', getGiftsController.GetById.bind(getGiftsController));

export default getGiftsRouter;