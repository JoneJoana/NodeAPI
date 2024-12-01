import {v4 as uuid} from 'uuid';

export class Gift {
    id: string;
    name: string;
    price: number;
    toWho: string;

    constructor(name: string, price: number, toWho:string) {
        this.id = uuid();
        this.name = name;
        this.price = price;
        this.toWho = toWho;
    }

    print(): string{
        return `${this.name} for ${this.toWho}`;
    };
}