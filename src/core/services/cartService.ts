import React from 'react';
import { BeerListItem } from '../models/beer-list-item';

export class CartService {
    private _cartItems =  Array<BeerListItem>();

    get cartItems(): Array<BeerListItem> {
        return this._cartItems;
    }

    get count(): number {
        return this._cartItems.length;
    }

    addItem(item: BeerListItem) {
        this._cartItems.push(item);
    }
}


export const cartService = new CartService();
export const CartContext = React.createContext({ cartService, addToCart: () => {} });