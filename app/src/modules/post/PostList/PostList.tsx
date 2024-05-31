import { CSSProperties, useEffect } from "react"
import { postListStore } from "./stores/PostListStore";
import './PostList.css'
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { DotLoader } from "react-spinners";

export const PostList = observer(() => {
    const { loadPostList, postListDataState, awaiting } = postListStore;

    useEffect(() => {
        loadPostList();
    }, []);

    const navigate = useNavigate();

    const handlePostClick = (postId: number) => {
        navigate(`/post/${postId}`);
    };

    const override: CSSProperties = {
        display: "block",
        margin: "100px auto",
        borderColor: "red",
        position: "absolute",
        zIndex: 1,
      };

    return <>
        <h2 className="post__header__block">Наш блог</h2>

        <DotLoader
            className="loader"
            color={'#00B307'}
            loading={awaiting}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />

        <div className="posts">
            {postListDataState && postListDataState.map((post) => <div key={post.id} className="post__item">
                <h3 className="post__title" onClick={() => handlePostClick(post.id)}>{post.title}</h3>
                <img className="post__image" src={post.image} alt="Post Image" />
            </div>)}
        </div>
    </>
})