import './Header4.css'

export const Header4 = () => {
    return <>
        <header className="header">
            
                <div className="header__top">
                    <div className="container">
                        <div className="header__top__left">
                            <a target='_blank' href="https://www.google.com/maps/search/Lincoln-+344,+Illinois,+Chicago,+USA/@41.833871,-87.8967705,11z/data=!3m1!4b1?entry=ttu" className="location">
                                <span className="location__img"></span>
                                <p className="location__text">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                            </a>
                        </div>
                        <div className="header__top__right">
                            <div className="localization">
                                <div className="lang">Eng</div>
                                <div className="currency">USD</div>
                            </div>    
                            <div className="auth">
                                <p className="sign_in">Sign In</p>
                                <p className="slash">/</p>
                                <p className="sign_up">Sign Up</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__bot">
                    <div className="container">
                        <div className="header__nav">
                            <nav className="nav">
                                <ul className='nav__items'>
                                    <li className='nav__item'><a className='active' href="#">Home</a></li>
                                    <li className='nav__item'><a href="#">Shop</a></li>
                                    <li className='nav__item'><a href="#">Pages</a></li>
                                    <li className='nav__item'><a href="#">Blog</a></li>
                                    <li className='nav__item'><a href="#">About Us</a></li>
                                    <li className='nav__item'><a href="#">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="logo">
                            <a href="#"></a>
                        </div>

                        <div className="header__bot__info">
                            <div className="header__phone">
                                <a href="tel:+1 (219) 555-0114">
                                    <div className="phone__ico"></div>
                                    <p className="phone__number">+1 (219) 555-0114</p>
                                </a>
                            </div>
                            <div className="header__user__info">
                                <div className="header__search">
                                    <div className="search__ico"></div>
                                </div>
                                <div className="order__container">
                                    <div className="wishlist">
                                        <div className="wishlist__wrapper"></div>
                                    </div>
                                    <div className="cart">
                                        <div className="cart__ico">
                                            <div className="cart__ico__badge">2</div>
                                        </div>
                                    </div>
                                    <div className="auth"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </header>
    </>
}