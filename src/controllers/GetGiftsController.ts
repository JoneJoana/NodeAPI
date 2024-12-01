import {GiftRepository} from "../GiftRepository";
import {Request, Response} from 'express';

export class GetGiftsController{
    giftRepository: GiftRepository;

    constructor() {
        this.giftRepository = GiftRepository.getInstance();
    };

    GetAll(req: Request, res: Response){
        res.json(this.giftRepository.getGifts());
    };

    GetToWho(req: Request, res: Response){
        const { toWho } = req.params;
        res.json(this.giftRepository.getGifts()[toWho]);
    };
}


