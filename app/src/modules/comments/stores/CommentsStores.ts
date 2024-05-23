import { makeAutoObservable, runInAction } from "mobx";
import { Comment } from "../models/Comment";

class CommentsStores {
    commentsListState: Comment [] | undefined = undefined;
    awaiting: boolean = false;

    get commentsCount() {
        return this.commentsListState?.reduce((acc: number) => acc + 1, 0);
    };

    constructor() {
        makeAutoObservable(this);
    };

    loadComments = async () => {
        try {
            runInAction(() => {
                this.awaiting = true;
            });
            const response = await fetch('http://localhost:3001/comments');
            if (response.status === 200) {
                const data: Comment [] = await response.json();
                runInAction(() => {
                    this.commentsListState = data;
                });
            }
        } catch (error) {
            console.log(error);
        } finally {
            runInAction(() => {
                this.awaiting = false;
            });
        }
    }
};

export const commentsListStore = new CommentsStores();