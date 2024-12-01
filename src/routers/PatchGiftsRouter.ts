import Router from 'express';
import {PatchGiftsController} from "../controllers/PatchGiftsController";

const patchGiftsRouter = Router();
const patchGiftsController = new PatchGiftsController();

patchGiftsRouter.patch('/gift/:pos', patchGiftsController.patch);


export default patchGiftsRouter;