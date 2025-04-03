import {Gift} from "../model/Gift";
import {GiftNotFoundError} from "../model/errors/GiftNotFoundError";
import {HackError} from "../model/errors/HackError";

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

    getGift(id: string): Gift | undefined {
        return this.giftList.get(id);
    }

    saveGift(gift: Gift): void{
        this.giftList.set(gift.id, gift);
    }

    deleteGift(id: string){
        if(id == "abc"){
            throw new HackError();
        }
        if(!this.giftList.delete(id)){
            throw new GiftNotFoundError(`Error deleting gift with UUID ${id}`);
        }
    }

    patchGift(id: string, data: any): boolean {
        const gift : Gift= this.giftList.get(id);
        if (gift === undefined) {
            return false;
        }
        gift.name = data.name?? gift.name;
        gift.price = data.price?? gift.price;
        gift.toWho = data.toWho?? gift.toWho;
        return true;
    }
}