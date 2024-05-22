import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { Badge } from 'antd'
import { catalogStore } from '../../../../modules/catalog/components/CatalogList/stores/CatalogListStore'
import { observer } from 'mobx-react-lite'
import { cartStore } from '../../../../common/stores/CartStore'
import { wishListStore } from '../../../../modules/wishlist/stores/WishListStore'

export const Header = observer(() => {
    const { countWishList } = catalogStore;
    const { wishStoreCount } = wishListStore;
    const { cartCount, totalPrice } = cartStore;

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
                                <p className="sign_in"><Link to="/sign/signin">Sign In</Link></p>
                                <p className="slash">/</p>
                                <p className="sign_up"><Link to="/sign/signup">Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__middle">
                    <div className="container">
                        <div className="logo">
                            <Link to="/"></Link>
                        </div>
                        <div className="search">
                            <div className="search__container">
                                <div className="search__ico"></div>
                                <input type="text" name="" id="" className="search__input" placeholder='Search' />
                            </div>
                            <button className="search__btn btn">Search</button>
                        </div>
                        <div className="order__container">
                            <div className="wishlist">
                                <Link to='/wishlist'><div className="wishlist__wrapper"><Badge count={wishStoreCount}></Badge></div></Link>
                            </div>
                            <div className="cart">
                                <Link to="/cart">
                                    <div className="cart__ico">
                                        {/* <div className="cart__ico__badge">2</div> */}
                                        <Badge color='#2C742F' count={cartCount}></Badge>
                                    </div>
                                </Link>
                                <div className="cart__info">
                                    <div className="cart__info__text">Shopping cart:</div>
                                    <div className="cart__info__total_price">${totalPrice}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__bot">
                    <div className="container">
                        <div className="header__nav">
                            <nav className="nav">
                                <ul className='nav__items'>
                                    <li className='nav__item'><NavLink to="/">Home</NavLink></li>
                                    <li className='nav__item'><NavLink to="/catalog">Shop</NavLink></li>
                                    <li className='nav__item'><NavLink to="">Pages</NavLink></li>
                                    <li className='nav__item'><NavLink to="/post">Blog</NavLink></li>
                                    <li className='nav__item'><NavLink to="/comments">Feedback</NavLink></li>
                                    <li className='nav__item'><NavLink to="/offers">News</NavLink></li>
                                    <li className='nav__item'><NavLink to="/staff">About Us</NavLink></li>
                                    <li className='nav__item'><NavLink to="/contacts">Contact Us</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header__phone">
                            <a href="tel:+1 (219) 555-0114">
                                <div className="phone__ico"></div>
                                <p className="phone__number">+1 (219) 555-0114</p>
                            </a>
                        </div>
                    </div>
                </div>

        </header>
    </>
})