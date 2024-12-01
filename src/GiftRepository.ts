import {Gift} from "./Gift";

export class GiftRepository {
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
}