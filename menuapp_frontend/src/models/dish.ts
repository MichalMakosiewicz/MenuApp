export interface DishInterfaceRaw {
    id: number;
    name: string;
    description: string;
    price: number;
    preparation_time: number;
    add_date: string;
    update_date: string;
    photo: string;
    is_vegan: boolean;
}

export class DishModel {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public preparation_time: number;
    public add_date: string;
    public update_date: string;
    public photo: string;
    public is_vegan: boolean;

    constructor(dishInterface: DishInterfaceRaw) {
        this.id = dishInterface.id;
        this.name = dishInterface.name;
        this.description = dishInterface.description;
        this.price = dishInterface.price;
        this.preparation_time = dishInterface.preparation_time;
        this.add_date = dishInterface.add_date;
        this.update_date = dishInterface.update_date;
        this.photo = dishInterface.photo;
        this.is_vegan = dishInterface.is_vegan;
    }
}