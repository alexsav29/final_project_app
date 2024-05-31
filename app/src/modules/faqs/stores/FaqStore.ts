import { makeAutoObservable, runInAction } from "mobx";
import { FaqData } from "../models/FaqData";

class FaqStore {
    faqDataState: FaqData [] | undefined = undefined;
    awaiting: boolean = false;

    constructor() {
        makeAutoObservable(this);
    };

    loadFaqData = async () => {
        try {
            runInAction(() => {
                this.awaiting = true;
            });

            const response = await fetch('http://localhost:3001/faq');
            if (response.status === 200) {
                const data: FaqData [] = await response.json();
                runInAction(() => {
                    this.faqDataState = data;
                });
            };
        } catch (error) {
            console.log(error);
        } finally {
            runInAction(() => {
                this.awaiting = false;
            });
        };
    };
};

export const faqStore = new FaqStore();