import Router from 'express';
import {postNewGiftsList} from "../controllers/PostGiftsController";

const postGiftsRouter = Router();

postGiftsRouter.post('/gifts', postNewGiftsList);

export default postGiftsRouter;