import './Home.css'

export const Home = () => {
    return <>
        <div className="promo__block">
            <div className="promo__banner__left">
                <img className='promo1' src='../../../public/icon/Banners/promo__banner_1.svg' alt="Promo Image" />
            </div>
            <div className="promo__banner__right">
                <img src="../../../public/icon/Banners/promo__banner_2.svg" alt="Promo Image" className="promo2" />
                <img src="../../../public/icon/Banners/promo__banner_3.svg" alt="Promo Image" className="promo3" />
            </div>
        </div>

        <div className="promo__block__2">
            <img className='promo4' src="../../../public/icon/Banners/promo__banner_4.png" alt="Promo Image" />
        </div>

        {/* <div className="popular__categories">
            <p className="popular__categories__header">Популярные категории</p>
            <div className="popular__categories__body">

            </div>
        </div> */}
    </>
}