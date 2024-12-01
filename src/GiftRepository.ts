import {Gift} from "./Gift";

export class GiftRepository {
    private giftList: Map<string, Gift>;

    private static instance: GiftRepository;

    private constructor() {
        this.giftList = new Map<string, Gift>();
    }

    static getInstance(): GiftRepository {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new GiftRepository();
        return this.instance;
    }

    getGifts(): Map<string, Gift> {
        return this.giftList;
    }

    getGift(id: string): Gift {
        return this.giftList.get(id);
    }

    addGift(gift: Gift): void{
        this.giftList.set(gift.id, gift);
    }

    deleteGift(id: string): boolean{
        return this.giftList.delete(id);
    }
}