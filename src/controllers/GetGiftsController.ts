import {GiftRepository} from "../GiftRepository";
import {Request, Response} from 'express';
import {Gift} from "../Gift";

export class GetGiftsController{
    giftRepository: GiftRepository;
    giftsList: Gift[];

    constructor() {
        this.giftRepository = GiftRepository.getInstance();
        this.giftsList = this.giftRepository.getGifts();
    };

    GetAll(req: Request, res: Response){
        res.send(JSON.stringify(this.giftsList));
    };

    GetToWho(req: Request, res: Response){
        const { toWho } = req.params;
        res.send(JSON.stringify(this.giftsList[toWho]));
    };
}


