import Router from 'express';
import {PatchGiftsController} from "../controllers/PatchGiftsController";

const patchGiftsRouter = Router();
const patchGiftsController = new PatchGiftsController();

patchGiftsRouter.patch('/gift/:id', patchGiftsController.patch.bind(patchGiftsController));


export default patchGiftsRouter;