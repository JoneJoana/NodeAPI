import {Request, Response} from 'express';

export class PatchGiftsController{
    patch(req: Request,res: Response) {
        const {pos} = req.params;
        res.send(`Modified gift in position ${pos}`);
    };
}

