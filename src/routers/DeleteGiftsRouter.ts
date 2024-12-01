import Router from 'express';
import {deleteGiftsController} from "../controllers/DeleteGiftsController";

const deleteGiftsRouter = Router();

deleteGiftsRouter.delete('/gift/:pos', deleteGiftsController);

export default deleteGiftsRouter;