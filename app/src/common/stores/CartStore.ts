import { makeAutoObservable } from "mobx";
import { ProductInCart } from "../models/ProductInCart";
import { Product } from "../models/Product";

class CartStore {
    cartState: ProductInCart [] = [];

    get cartCount() {
        return this.cartState.reduce((acc, product) => acc + product.count, 0);
    }

    get totalPrice() {
        return this.cartState.reduce((acc, productInCart) => {
            const price: number = +productInCart.Price.map((price) => price.Price);
            return acc + (productInCart.count*price)
        }, 0).toFixed(2);
    }

    constructor() {
        makeAutoObservable(this);
    }

    addToCart = (product: Product) => {
        const findProductIndex = this.cartState.findIndex(({ id }) => id === product.id);

        if (findProductIndex === -1) {
            this.cartState.push({...product, count: 1})
        } else {
            this.cartState[findProductIndex].count += 1;
        };
    };

    deleteProductInCart = (productId: number) => {
        this.cartState = this.cartState.filter((product) => product.id !== productId);
    };

    clearCart = () => {
        this.cartState = [];
    }

}

export const cartStore = new CartStore();