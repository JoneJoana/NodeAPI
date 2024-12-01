import {Gift} from "./Gift";

export class GiftRepository {
    private readonly giftList: Map<string, Gift>;

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

    saveGift(gift: Gift): void{
        this.giftList.set(gift.id, gift);
    }

    deleteGift(id: string): boolean{
        return this.giftList.delete(id);
    }

    patchGift(id: string, data: any) {
        const gift: Gift = this.giftList.get(id);
        gift.name = data.name?? gift.name;
        gift.price = data.price?? gift.price;
        gift.toWho = data.toWho?? gift.toWho;
    }
}