import {Request, Response} from 'express';
import {GiftRepository} from "../GiftRepository";
import {Gift} from "../Gift";

export class PostGiftsController{
    giftRepository: GiftRepository;

    constructor() {
        this.giftRepository = new GiftRepository();
    }

    post(req: Request, res: Response) {
        const gift = new Gift(
            req.body.data.name,
            req.body.data.price,
            req.body.data.toWho
        );
        this.giftRepository.addGift(gift);
        res.send(`Gift added: ${gift.print()}`);
    };
}
