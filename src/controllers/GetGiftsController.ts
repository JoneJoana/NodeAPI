import {GiftRepository} from "../service/GiftRepository";
import {Request, Response} from 'express';

export class GetGiftsController{
    private readonly giftRepository: GiftRepository;

    constructor() {
        this.giftRepository = GiftRepository.getInstance();
    };

    GetAll(req: Request, res: Response){
        const obj = Object.fromEntries(this.giftRepository.getGifts());
        res.status(200).json(obj);
    };

    GetById(req: Request, res: Response){
        const { id } = req.params;
        const gift = this.giftRepository.getGift(id);
        res.status(200).json(gift);
    };
}


