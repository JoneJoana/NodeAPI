import {GiftRepository} from "../GiftRepository";
import {Request, Response} from 'express';
import {Gift} from "../Gift";

export class GetGiftsController{
    giftsRepository: GiftRepository;
    giftsList: Gift[];

    constructor() {
        this.giftsRepository = new GiftRepository();
        this.giftsList = this.giftsRepository.getGifts();
    }

    GetAll(req: Request, res: Response){
        res.send(JSON.stringify(this.giftsList));
    };

    GetToWho(req: Request, res: Response){
        const { toWho } = req.params;
        res.send(JSON.stringify(this.giftsList[toWho]));
    };
}


