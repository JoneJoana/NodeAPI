import {GiftRepository} from "../GiftRepository";
import {Request, Response} from 'express';

export class GetGiftsController{
    giftRepository: GiftRepository;

    constructor() {
        this.giftRepository = GiftRepository.getInstance();
    };

    GetAll(req: Request, res: Response){
        const obj = Object.fromEntries(this.giftRepository.getGifts());
        res.json(obj);
    };

    GetById(req: Request, res: Response){
        const { id } = req.params;
        const gift = this.giftRepository.getGift(id);
        res.json(gift);
    };
}


