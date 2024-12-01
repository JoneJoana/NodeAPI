import Router from 'express';
import {postNewGift} from "../controllers/PostGiftsController";

const postGiftsRouter = Router();

postGiftsRouter.post('/gift', postNewGift);

export default postGiftsRouter;