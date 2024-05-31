import { newsStore } from './stores/NewsStore'
import { CSSProperties, useEffect } from 'react';
import { DotLoader } from 'react-spinners';
import './News.css'
import { observer } from 'mobx-react-lite';

export const News = observer(() => {
    const { awaiting, loadNewsData, newsDataState, newsCount } = newsStore;

    const override: CSSProperties = {
        display: "block",
        margin: "100px auto",
        borderColor: "red",
        position: "absolute",
        zIndex: 1,
    };

    useEffect(() => {
        loadNewsData();
    }, [])

    return <>
        <DotLoader
            className="loader"
            color={'#00B307'}
            loading={awaiting}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />

        {newsDataState && <div className="news">
            <h2 className="news__header">Наши акционные предложения</h2>
            <p className="news__count">Количество акционных предложений сегодня: {newsCount}</p>

            <div className="news__items">
                {newsDataState.map((news) => <div key={news.id} className="news__item">
                    <p className="news__title">{news.title}</p>
                    <img src={news.photo} className="news__image" />
                    <div className="news__description">{news.description}</div>
                </div>)}
            </div>
        </div>}
    </>
})