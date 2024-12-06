import {Request, Response} from 'express';
import {GiftRepository} from "../service/GiftRepository";


export class DeleteGiftsController {
    private readonly giftRepository: GiftRepository;

    constructor() {
        this.giftRepository = GiftRepository.getInstance();
    };

    delete(req: Request ,res: Response)  {
        const {id} = req.params;
        if(this.giftRepository.deleteGift(id)){
            res.status(204).send();
        } else{
            res.send(`Error deleting gift with UUID ${id}`);
        }
    };
}