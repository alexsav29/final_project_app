
import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "../../../../../common/models/Product";

class CatalogListStore {
    catalogListDataState: Product [] | [] = [];
    wishListState: Product [] = [];
    categoriesState: string [] | undefined = undefined;
    awaiting: boolean = false;

    get allCategories() {
        return this.categoriesState && ['Все категории', ...this.categoriesState];
    }

    get countWishList() {
        return this.catalogListDataState?.reduce((acc, item) => {
            if (item.isFavourite) {
                acc + 1;
            }
            return acc;
        }, 0)

        // let count = 0;
        // this.catalogListDataState?.forEach((item) => {
        //     if (item.isFavourite) {
        //         count += 1;
        //     }
        // })
        // return count;
    }

    get wishStoreCount() {
        return this.wishListState.length;
    }

    constructor() {
        makeAutoObservable(this);
    }

    loadingCategoriesData = async () => {
        try {
            const response = await fetch('http://localhost:3001/categories');
            if (response.status === 200) {
                const data: string [] = await response.json();
                runInAction(() => {
                    this.categoriesState = data;
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    loadingProductData = async () => {
        try {
            this.awaiting = true;
            const response = await fetch('http://localhost:3001/products');
            if (response.status === 200) {
                const data: Product [] = await response.json();
                runInAction(() => {
                    this.catalogListDataState = data;
                })
            }
        } catch (error) {
            console.log(error);
        } finally {
            runInAction(() => {
                this.awaiting = false;
            })
        }
    };

    toggleToWishList = (wishProduct: Product) => {
        if (this.catalogListDataState) {

            const index = this.wishListState && this.wishListState.findIndex((product) => wishProduct.id === product.id);
    
            if (index === -1) {
                this.wishListState.push(wishProduct);
                this.catalogListDataState = this.catalogListDataState.map((product) => {
                    if (product.id === wishProduct.id) {
                        product.isFavourite = true;
                    }
                })
            } else {
                this.wishListState = this.wishListState.filter((_, ind) => ind !== index);
                this.catalogListDataState = this.catalogListDataState.map((product) => {
                    if (product.id === wishProduct.id) {
                        product.isFavourite = false;
                    }
                })
            };
    
            // console.log(wishProduct.isFavourite);
            // console.log(this.catalogListDataState);
            // console.log(this.wishListState);
        };
        }
}

export const catalogStore = new CatalogListStore();