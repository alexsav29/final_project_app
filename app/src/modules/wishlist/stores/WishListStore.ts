import { makeAutoObservable } from "mobx";

type WishListStateType = {
    id: number;
    isFavourite: boolean;
}

class WishListStore {
    wishListState: WishListStateType [] | undefined = undefined;

    constructor() {
        makeAutoObservable(this);
    }
}