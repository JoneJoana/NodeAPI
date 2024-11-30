import {Gift} from "./Gift";

export class GiftRepository {

    getGifts(): Gift[] {
        return [
            new Gift("estufa",80,"papa"),
            new Gift("collar",5000,"mama"),
            new Gift("calzoncillo",300,"oscar")
        ]
    }

}

