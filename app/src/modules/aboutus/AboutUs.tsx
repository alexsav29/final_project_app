import { staffStore } from "./stores/AboutUsStores";
import { CSSProperties, useEffect } from "react";
import { DotLoader } from "react-spinners";
import { observer } from "mobx-react-lite";
import './AboutUs.css'

export const AboutUs = observer(() => {
    const { awaiting, staffState, loadStaffData } = staffStore;

    useEffect(() => {
        loadStaffData();
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

        {staffState && <div className="aboutus">

            <div className="aboutus__info">
                <h2 className="aboutus__info__header">Добро пожаловать в наш интернет-магазин экологичных товаров!</h2>

                <img src="../../../public/icon/Staff/staff__bg_1.jpg" alt="" className="aboutus__image" />

                <p className="aboutus__info__item">Мы - команда энтузиастов, которые верят в то, что забота о планете начинается с малого. Наша миссия - предлагать товары, которые не только качественные и удобные, но и произведены с учетом экологических стандартов.</p>

                <p className="aboutus__info__item">В нашем ассортименте вы найдете широкий выбор товаров для дома, красоты и здоровья, которые произведены без вреда для окружающей среды. Мы тщательно отбираем поставщиков и продукты, чтобы убедиться, что они соответствуют нашим строгим экологическим критериям.</p>

                <p className="aboutus__info__item">Мы гордимся тем, что предлагаем нашим клиентам возможность делать покупки, которые помогают сохранить нашу планету для будущих поколений. Вместе мы можем сделать мир лучше!</p>

                <p className="aboutus__info__item">Присоединяйтесь к нам в этом зеленом путешествии!</p>
            </div>

            <div className="aboutus__staff">
                {staffState.map((staff) => <div key={staff.id} className="staff__item">
                    <div className="staff__img">
                        <img className="staff__img__content" src={staff.photo} alt="Staff Photo" />
                    </div>
                    <div className="staff__info">
                        <div className="staff__name">{staff.name}</div>
                        <div className="staff__rank">{staff.rank}</div>
                        <div className="staff__description">{staff.description}</div>
                    </div>
                </div>)}
            </div>
        </div>}
    </>
})