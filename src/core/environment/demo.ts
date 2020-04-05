import { BeerListItem } from "../models/beer-list-item";

export class Demo {
    get inventory(): Array<BeerListItem> {
        let inventory = new Array<BeerListItem>()

        const randItems = getRandomArbitrary(1, 5);

        for (let i = 0; i < randItems; i++) {
            const randIbu = getRandomArbitrary(5, 95);
            const item = {
                id: i,
                name: 'Ambiguë',
                ibu: randIbu, 
                alcoolPercentage: 4.5, 
                type: 'Bitter'
            } as BeerListItem;

            inventory.push(item);
        }

        return inventory;
    }
}

function getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}