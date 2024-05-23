import { makeAutoObservable, runInAction } from "mobx";
import { Post } from "../../models/PostData";

class PostPageStore {
    postPageData: Post | undefined = undefined;
    awaiting: boolean = false;

    constructor() {
        makeAutoObservable(this);
    };

    loadPost = async (postIdParam: string) => {
        try {
            runInAction(() => {
                this.awaiting = true;
            });
            const response = await fetch(`http://localhost:3001/posts/${postIdParam}`);
            if (response.status === 200) {
                const data: Post = await response.json();
                runInAction(() => {
                    this.postPageData = data;
                });
            };
        } catch (error) {
            console.log(error);
        } finally {
            runInAction(() => {
                this.awaiting = false;
            })
        }
    };
};

export const postPageStore = new PostPageStore();