import {Request, Response} from 'express';
import {GiftRepository} from "../GiftRepository";
import {Gift} from "../Gift";

export class PostGiftsController{
    private readonly giftRepository: GiftRepository;

    constructor() {
        this.giftRepository = GiftRepository.getInstance();
    };

    post(req: Request, res: Response) {
        const gift = new Gift(
            req.body.name,
            req.body.price,
            req.body.toWho
        );
        this.giftRepository.addGift(gift);
        res.send(`Gift added: ${gift.print()}`);
    };
}
