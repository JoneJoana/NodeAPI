import {Request, Response} from 'express';
import {GiftRepository} from "../GiftRepository";

export class PatchGiftsController{
    private readonly giftRepository: GiftRepository;

    constructor() {
        this.giftRepository = GiftRepository.getInstance();
    };

    patch(req: Request,res: Response) {
        const {id} = req.params;
        const data = req.body;
        this.giftRepository.patch(id, data);

        const dataJson = JSON.stringify(data);
        res.send(`Modified gift in position ${id} with ${dataJson}`);
    };
}

