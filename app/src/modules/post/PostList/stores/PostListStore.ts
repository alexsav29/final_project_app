import { makeAutoObservable, runInAction } from "mobx";
import { Post } from "../../models/PostData";

class PostListStore {
    postListDataState: Post [] | undefined = undefined;
    awaiting: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    loadPostList = async () => {
        try {
            runInAction(() => {
                this.awaiting = true;
            });
            const response = await fetch('http://localhost:3001/posts');
            if (response.status === 200) {
                const data: Post [] = await response.json();
                runInAction(() => {
                    this.postListDataState = data;
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

export const postListStore = new PostListStore();