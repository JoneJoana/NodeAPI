import Router from 'express';
import {DeleteGiftsController} from "../controllers/DeleteGiftsController";

const deleteGiftsRouter = Router();
const deleteGiftsController = new DeleteGiftsController();

deleteGiftsRouter.delete('/gift/:id', deleteGiftsController.delete.bind(deleteGiftsController));

export default deleteGiftsRouter;