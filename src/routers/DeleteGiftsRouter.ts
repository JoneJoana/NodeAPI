import Router from 'express';
import {DeleteGiftsController} from "../controllers/DeleteGiftsController";

const deleteGiftsRouter = Router();
const deleteGiftsController = new DeleteGiftsController();

deleteGiftsRouter.delete('/gift/:pos', deleteGiftsController.delete);

export default deleteGiftsRouter;