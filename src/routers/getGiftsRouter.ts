import {Router} from 'express';
import {GiftRepository} from "../GiftRepository";


const getGiftsRouter = Router();

const giftsRepository = new GiftRepository();
const giftsList = giftsRepository.getGifts();

getGiftsRouter.get('/gifts', (req, res) => {
    res.send(JSON.stringify(giftsList));
});

getGiftsRouter.get('/gifts/:toWho', (req, res) => {
    const { toWho } = req.params;
    res.send(JSON.stringify(giftsList[toWho]));
});

export default getGiftsRouter;