import {Request, Response} from 'express';
import {GiftRepository} from "../service/GiftRepository";

export class PutGiftsController{
    private readonly giftRepository: GiftRepository;

    constructor() {
        this.giftRepository = GiftRepository.getInstance();
    };

    put(req: Request,res: Response) {
        const data = req.body;

        const gift = this.giftRepository.getGift(req.params.id);
        gift.name = data.name;
        gift.price = data.price;
        gift.toWho = data.toWho;
        this.giftRepository.saveGift(gift);

        const dataJson = JSON.stringify(data);
        res.send(`Updated gift with position ${gift.id} with ${dataJson}`);
    };
}
