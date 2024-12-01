import {Gift} from "./Gift";

export class GiftRepository {
    private static instance: GiftRepository;

    private constructor() {}

    static getInstance(): GiftRepository {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new GiftRepository();
        return this.instance;
    }

    giftList: Gift[] = [
        new Gift("estufa",80,"papa"),
        new Gift("collar",5000,"mama"),
        new Gift("calzoncillo",300,"oscar")
    ];

    addGift(gift: Gift): void{
        this.giftList.push(gift);
    }

    getGifts(): Gift[] {
        return this.giftList;
    }

    deleteGift(id: string): void{
        let index = this.giftList.findIndex(d => d.id === id); //find index in your array
        this.giftList.splice(index, 1);//remove element from array
    }
}