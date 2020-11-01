import { DishModel } from './dish';

export interface CardInterfaceRaw {
    id: number;
    title: string;
    create_date: string;
    update_date: string;
    dish: number[];
}

export class CardModel {
    public id: number;
    public title: string;
    public create_date: string;
    public update_date: string;
    public dish: number[];

    constructor(cardInterface: CardInterfaceRaw) {
        this.id = cardInterface.id;
        this.title = cardInterface.title;
        this.create_date = cardInterface.create_date;
        this.update_date = cardInterface.update_date;
        this.dish = cardInterface.dish;
    }
}