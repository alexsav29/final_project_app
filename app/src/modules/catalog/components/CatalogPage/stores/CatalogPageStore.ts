import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "../../../../../common/models/Product";

export class CatalogPageStore {
    productDataState: Product | undefined  = undefined;
    awaiting: boolean = false;

    constructor() {
        makeAutoObservable(this);
    };

    loadProduct = async (productId: string) => {
        try {
            runInAction(() => {
                this.awaiting = true;
            });
            const response = await fetch(`http://localhost:3001/products/${productId}`);
            if (response.status === 200) {
                const data: Product = await response.json();
                runInAction(() => {
                    this.productDataState = data;
                });
            }
        } catch (error) {
            console.log(error);
        } finally {
            runInAction(() => {
                this.awaiting = false;
            })
        }
    }
}