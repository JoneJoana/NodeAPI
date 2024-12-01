import Router from 'express';
import {patchGiftsController} from "../controllers/PatchGiftsController";

const patchGiftsRouter = Router();

patchGiftsRouter.patch('/gift/:pos', patchGiftsController);


export default patchGiftsRouter;