import { BeerListItem } from "../models/beer-list-item";
import { ListItem } from "../models/list-item";

export class Demo {
    get inventory(): Array<ListItem<BeerListItem>> {
        let inventory = new Array<ListItem<BeerListItem>>()

        const randItems = getRandomArbitrary(1, 20);

        for (let i =0; i < randItems; i++) {
            const randIbu = getRandomArbitrary(5, 95);
            const item = {
                id: i,
                name: 'Ambiguë',
                ibu: randIbu, 
                alcoolPercentage: 4.5, 
                type: 'Bitter'
            } as ListItem<BeerListItem>;

            inventory.push(item);
        }

        return inventory;
    }
}

function getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}