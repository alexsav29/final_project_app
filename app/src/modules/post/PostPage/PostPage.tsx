import { CSSProperties, useEffect } from "react";
import { postPageStore } from "./stores/PostPageStore";
import { useNavigate, useParams } from "react-router-dom";
import './PostPage.css'
import { observer } from "mobx-react-lite";
import { DotLoader } from "react-spinners";
import { Button, ConfigProvider } from "antd";
import { TinyColor } from '@ctrl/tinycolor';
import { PostList } from "../PostList";
import { postListStore } from "../PostList/stores/PostListStore";

export const PostPage = observer(() => {
    const { loadPost, postPageData, awaiting } = postPageStore;
    const { postListDataState, loadPostList } = postListStore

    const { postId } = useParams();

    useEffect(() => {
        loadPost(postId!);
        loadPostList();
    }, [postId]);

    const navigate = useNavigate();

    const handlePrevPostClick = () => {
        if (postId === '1') {
            return;
        };
        navigate(`../../post/${+postId! - 1}`)
    };

    const lastPostPageIndex = postListDataState?.length;

    const handleNextPostClick = () => {
        // const lastPostPageIndex = postListDataState?[postListDataState?.length - 1].id; // почему так не работает?

        if (postId === lastPostPageIndex?.toString()) {
            return;
        };
        
        navigate(`../../post/${+postId! + 1}`)
    };

    const override: CSSProperties = {
        display: "block",
        margin: "100px auto",
        borderColor: "red",
        position: "absolute",
        zIndex: 1,
      };

    // const colors1 = ['#6253E1', '#04BEFE'];
    // const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
    const colors3 = ['#40e495', '#30dd8a', '#2bb673'];

    const getHoverColors = (colors: string[]) =>
        colors.map((color) => new TinyColor(color).lighten(5).toString());
    const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

    
    return <>
        <div className="post">
            <DotLoader
                className="loader"
                color={'#00B307'}
                loading={awaiting}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

            <h2 className="post__item__title">{postPageData?.title}</h2>
            <img src={postPageData?.image} className="post__item__image" />
            <p className="post__item__body">{postPageData?.body}</p>
        </div>

        <div className="change__post__btns">
        <ConfigProvider
            theme={{
                components: {
                Button: {
                    colorPrimary: `linear-gradient(135deg, ${colors3.join(', ')})`,
                    colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors3).join(', ')})`,
                    colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors3).join(', ')})`,
                    lineWidth: 0,
                },
                },
            }}
        >
            {postId !== '1' && <Button onClick={handlePrevPostClick} type="primary" size="large" className="prev__post__btn">Предыдущий</Button>}
        
            {postId !== lastPostPageIndex?.toString() && <Button onClick={handleNextPostClick} type="primary" size="large" className="next__post__btn">Следующий</Button>}
        </ConfigProvider>
        </div>
    </>
})