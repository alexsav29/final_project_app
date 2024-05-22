import { makeAutoObservable } from "mobx";
import { Product } from "../../../common/models/Product";
import { catalogStore } from "../../catalog/components/CatalogList/stores/CatalogListStore";

type WishListStateType = {
    id: number;
    isFavourite: boolean;
}

let { catalogListDataState } = catalogStore;
class WishListStore {
    // wishListState: WishListStateType [] | undefined = undefined;
    wishListState: Product [] = [];

    get wishStoreCount() {
        return this.wishListState.length;
    }

    constructor() {
        makeAutoObservable(this);
    }

    toggleToWishList = (wishProduct: Product) => {
        const index = this.wishListState && this.wishListState.findIndex((product) => wishProduct.id === product.id);

        if (index === -1) {
            this.wishListState.push(wishProduct);
            catalogListDataState = catalogListDataState?.map((product) => {
                if (product.id === wishProduct.id) {
                    product.isFavourite = true;
                    
                }
            })
        } else {
            this.wishListState = this.wishListState.filter((_, ind) => ind !== index);
            catalogListDataState = catalogListDataState?.map((product) => {
                if (product.id === wishProduct.id) {
                    product.isFavourite = false;
                }
            })
        };

        console.log(wishProduct.isFavourite);
        console.log(catalogListDataState);
        console.log(this.wishListState);
        
        
    };

}

export const wishListStore = new WishListStore();





    // let { catalogListDataState } = catalogStore;

    // const handleToggleToWishlist = (productId: number) => {
    //     catalogListDataState = catalogListDataState?.map((product) => {
    //         if (product.id === productId) {
    //             product.isFavourite = !product.isFavourite;
    //             console.log(product.isFavourite);
                
    //         };

    //         return product;
    //     })
    // };