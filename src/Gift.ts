export class Gift {
    name: string;
    price: number;
    toWho: string;

    constructor(name: string, price: number, toWho:string) {
        this.name = name;
        this.price = price;
        this.toWho = toWho;
    }
}