import { CSSProperties, useEffect } from "react";
import { faqStore } from "./stores/FaqStore"
import { observer } from "mobx-react-lite";
import { DotLoader } from "react-spinners";
import './Faqs.css'

export const Faqs = observer(() => {
    const { awaiting, faqDataState, loadFaqData } = faqStore;

    useEffect(() => {
        loadFaqData();
    }, []);

    const override: CSSProperties = {
        display: "block",
        margin: "100px auto",
        borderColor: "red",
        position: "absolute",
        zIndex: 1,
    };

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

        {faqDataState && <div className="faq">
            <h2 className="faq__header">Часто задаваемые вопросы</h2>
            <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/07/faq-632c0874710c1-sej.png" className="faq__img" />

            <div className="faq__items">
                {faqDataState.map((faq) => <div key={faq.id} className="faq__item">
                    <div className="faq__question">{faq.question}</div>
                    <div className="faq__answer">{faq.answer}</div>
                </div>)}
            </div>
        </div>}
    </>
})