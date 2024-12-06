import {Request, Response} from 'express';
import {GiftRepository} from "../service/GiftRepository";

export class PatchGiftsController{
    private readonly giftRepository: GiftRepository;

    constructor() {
        this.giftRepository = GiftRepository.getInstance();
    };

    patch(req: Request,res: Response) {
        const {id} = req.params;
        const data = req.body;
        this.giftRepository.patchGift(id, data);
        res.status(200).json(data);
    };
}

