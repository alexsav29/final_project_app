import { makeAutoObservable, runInAction } from "mobx";
import { NewsData } from "../models/NewsData";

class NewsStore {
    newsDataState: NewsData [] | undefined = undefined;
    awaiting: boolean = false;

    get newsCount() {
        return this.newsDataState?.length;
    }

    constructor() {
        makeAutoObservable(this);
    };

    loadNewsData = async () => {
        try {
            runInAction(() => {
                this.awaiting = true;
            });

            const response = await fetch('http://localhost:3001/news');
            if (response.status === 200) {
                const data: NewsData [] = await response.json();
                runInAction(() => {
                    this.newsDataState = data;
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
}

export const newsStore =  new NewsStore();