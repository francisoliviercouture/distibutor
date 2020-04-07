import { observable, action, computed } from "mobx";

export class CartStore {
    @observable
    items = observable.array<any>([]);

    @action.bound
    addItem(item: any): void {
        this.items.push(item);
    }

    @action.bound
    removeItem(): void {
        this.items.pop();
    }

    @computed
    get count(): number {
        return this.items.length;
    }
}