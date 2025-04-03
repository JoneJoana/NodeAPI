import {Request, Response} from 'express';
import {GiftRepository} from "../service/GiftRepository";
import {GiftNotFoundError} from "../model/errors/GiftNotFoundError";
import {HackError} from "../model/errors/HackError";


export class DeleteGiftsController {
    private readonly giftRepository: GiftRepository;

    constructor() {
        this.giftRepository = GiftRepository.getInstance();
    };

    delete(req: Request ,res: Response)  {
        const {id} = req.params;
        try{
            this.giftRepository.deleteGift(id)
            res.status(204).json();
        }catch (e) {
            if (e instanceof GiftNotFoundError) {
                res.status(404).json({
                    message: e.message
                });
            }
            if (e instanceof HackError) {
                res.status(409).json({
                    message: e.message
                });
            }

        }
    };
}