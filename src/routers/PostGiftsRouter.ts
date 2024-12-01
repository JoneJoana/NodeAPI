import Router from 'express';
import {PostGiftsController} from "../controllers/PostGiftsController";

const postGiftsRouter = Router();
const postNewGiftController = new PostGiftsController();

postGiftsRouter.post('/gift', postNewGiftController.post);

export default postGiftsRouter;