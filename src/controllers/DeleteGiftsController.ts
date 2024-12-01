import {Request, Response} from 'express';


export class DeleteGiftsController {
    delete(req: Request ,res: Response)  {
        const {pos} = req.params;
        res.send(`Delete gift in position ${pos}`);
    };
}