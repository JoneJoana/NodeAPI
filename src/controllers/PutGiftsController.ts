import {Request, Response} from 'express';

export class PutGiftsController{
    put(req: Request,res: Response) {
        const {pos} = req.params;
        res.send(`Updated gift with position ${pos}`);
    };
}
