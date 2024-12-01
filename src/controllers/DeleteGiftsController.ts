import {Request, Response} from 'express';
import {GiftRepository} from "../GiftRepository";


export class DeleteGiftsController {
    giftRepository: GiftRepository;

    constructor() {
        this.giftRepository = GiftRepository.getInstance();
    };

    delete(req: Request ,res: Response)  {
        const {id} = req.params;
        if(this.giftRepository.deleteGift(id)){
            res.send(`Delete gift with uuid ${id}`);
        } else{
            res.send(`Error deleting gift with UUID ${id}`);
        }
    };
}