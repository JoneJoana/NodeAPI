import {Request, Response} from 'express';
import {GiftRepository} from "../service/GiftRepository";

export class PatchGiftsController{
    private readonly giftRepository: GiftRepository;

    constructor() {
        this.giftRepository = GiftRepository.getInstance();
    };

    patch(req: Request,res: Response): Response {
        const {id} = req.params;
        const data = req.body;
        const isPatchDone = this.giftRepository.patchGift(id, data);
        if(isPatchDone){
            return res.status(200).json(data);
        }
        res.status(404).json({
            message: "Gift not found"
        });
    };
}

