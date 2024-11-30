import {GiftRepository} from "../GiftRepository";

const giftsRepository = new GiftRepository();
const giftsList = giftsRepository.getGifts();

export const getSimpleController = (req, res) => {
    res.send(JSON.stringify(giftsList));
};

export const getToWhoController = (req, res) => {
    const { toWho } = req.params;
    res.send(JSON.stringify(giftsList[toWho]));
};
