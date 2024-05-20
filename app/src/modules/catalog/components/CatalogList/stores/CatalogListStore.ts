
import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "../../../../../common/models/Product";

class CatalogListStore {
    catalogListDataState: Product [] | undefined = undefined;
    categoriesState: string [] | undefined = undefined;
    awaiting: boolean = false;

    get allCategories() {
        return this.categoriesState && ['Все категории', ...this.categoriesState];
    }

    get countWishList() {
        // return this.catalogListDataState?.reduce((acc, item) => {
        //     if (item.isFavourite) {
        //         return acc + 1;
        //     }
        // }, 0)

        let count = 0;
        this.catalogListDataState?.forEach((item) => {
            if (item.isFavourite) {
                count += 1;
            }
        })
        return count;
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
                })
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

    
}

export const catalogStore = new CatalogListStore();