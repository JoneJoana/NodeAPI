import {GiftRepository} from "../service/GiftRepository";
import {Request, Response} from 'express';
import {Gift} from "../model/Gift";

export class GetGiftsController{
    private readonly giftRepository: GiftRepository;

    constructor() {
        this.giftRepository = GiftRepository.getInstance();
    };

    GetAll(req: Request, res: Response){
        const gifts:  Map<string, Gift> = this.giftRepository.getGifts();
        res.status(200).json({
            gifts: Object.fromEntries(gifts)
        });
    };

    GetById(req: Request, res: Response){
        const { id } = req.params;
        const gift = this.giftRepository.getGift(id);
        res.status(200).json(gift.name);
    };
}


