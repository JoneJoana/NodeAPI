import {Request, Response} from 'express';

export class PostGiftsController{
    post(req: Request, res: Response) {
        res.send('Gift added');
    };
}
