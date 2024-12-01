import Router from 'express';
import {postNewGiftsList} from "../controllers/PostGiftController";

const postGiftRouter = Router();

postGiftRouter.post('/gifts', postNewGiftsList);

export default postGiftRouter;