import { CSSProperties, useEffect } from "react";
import { commentsListStore } from "./stores/CommentsStores";
import { observer } from "mobx-react-lite";
import './Comments.css'
import { DotLoader } from "react-spinners";
import { Rate } from "antd";

export const Comments = observer(() => {
    const { awaiting, commentsCount, loadComments, commentsListState } = commentsListStore;

    useEffect(() => {
        loadComments();        
    }, []);

    const override: CSSProperties = {
        display: "block",
        margin: "100px auto",
        borderColor: "red",
        position: "absolute",
        zIndex: 1,
    };

    return <>
        <h2 className="comments__page__header">Ваши отзывы о нашей работе</h2>

        <DotLoader
            className="loader"
            color={'#00B307'}
            loading={awaiting}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />

        <div className="comments__count">Количество отзывов: {commentsCount}</div>
        <div className="comments__list">
            {commentsListState && commentsListState.map((comment) => <div key={comment.id} className="comment__item">
                <div className="comment__header">
                    <p className="comment__title">{comment.name}</p>
                    <Rate className="comment__rating" allowHalf disabled={true} defaultValue={comment.rate} />
                </div>
                <p className="coment__body">{comment.body}</p>
                <p className="comment__email">{comment.email}</p>
            </div>)}
        </div>
    </>
})