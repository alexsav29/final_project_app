import { Link } from 'react-router-dom'
import { Button } from '../Button'
import './Footer.css'

export const Footer = () => {
    return <>
        <footer className="footer">
            <div className="footer__subscribe">
                <div className="container">
                    <div className="subscribe__text">
                        <h2 className="subscribe__text__title">Subcribe our Newsletter</h2>
                        <p className="subscribe__text__description">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                    </div>
                    <div className="subscribe__info">
                        <div className="subscribe__input__container">
                            <input type="text" name="" id="" className="subscribe__input" placeholder='Your email address' />
                            <Button size='large' type='fill'>Subscribe</Button>
                        </div>
                        <div className="subscribe__social">
                            <div className="facebook__ico"><Link to="https://www.facebook.com/" target='_blank'></Link></div>
                            <div className="twitter__ico"><Link to="https://x.com/" target='_blank'></Link></div>
                            <div className="pinterest__ico"><Link to="https://www.pinterest.com/" target='_blank'></Link></div>
                            <div className="instagram__ico"><Link to="https://www.instagram.com/" target='_blank'></Link></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer__pages">
                <div className="container">
                    <div className="footer__pages__info">
                        <div className="footer__logo"><Link to="/"></Link></div>
                        <p className="footer__description">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                        <div className="footer__info">
                            <a href='tel:+1(219)555-0114' className="footer__phone">+1 (219) 555-0114</a>
                            <p className="footer__info__text">or</p>
                            <a href="mailto:Proxy@gmail.com" className='footer__email'>Proxy@gmail.com</a>
                        </div>
                    </div>
                    <ul className="footer__pages__items">
                        <li className="footer__pages__item">
                            {/* <a href="qwerty">My Account</a> */}
                            <p>My Account</p>
                            <ul className="footer__pages__subitems">
                                <li className="footer__pages__subitem"><Link to="/account">My Account</Link></li>
                                <li className="footer__pages__subitem"><Link to="/history">Order History</Link></li>
                                <li className="footer__pages__subitem"><Link to="/cart">Shoping Cart</Link></li>
                                <li className="footer__pages__subitem"><Link to="/wishlist">Wishlist</Link></li>
                            </ul>
                        </li>
                        <li className="footer__pages__item">
                            {/* <a href="#">Helps</a> */}
                            <p>Helps</p>
                            <ul className="footer__pages__subitems">
                                <li className="footer__pages__subitem"><Link to="/contacts">Contact</Link></li>
                                <li className="footer__pages__subitem"><Link to="/faqs">Faqs</Link></li>
                                <li className="footer__pages__subitem"><Link to="/termsandconditions">Terms & Condition</Link></li>
                                <li className="footer__pages__subitem"><Link to="/privacypolicy">Privacy Policy</Link></li>
                            </ul>
                        </li>
                        <li className="footer__pages__item">
                            {/* <a href="#">Proxy</a> */}
                            <p>Proxy</p>
                            <ul className="footer__pages__subitems">
                                <li className="footer__pages__subitem"><Link to="/staff">About</Link></li>
                                <li className="footer__pages__subitem"><Link to="/catalog">Shop</Link></li>
                                <li className="footer__pages__subitem"><Link to="/superproduct">Super Product</Link></li>
                                <li className="footer__pages__subitem"><Link to="/tracking">Track Order</Link></li>
                            </ul>
                        </li>
                        <li className="footer__pages__item">
                            {/* <a href="#">Categories</a> */}
                            <p>Categories</p>
                            <ul className="footer__pages__subitems">
                                <li className="footer__pages__subitem"><Link to="#">Fruit & Vegetables</Link></li>
                                <li className="footer__pages__subitem"><Link to="#">Meat & Fish</Link></li>
                                <li className="footer__pages__subitem"><Link to="#">Bread & Bakery</Link></li>
                                <li className="footer__pages__subitem"><Link to="#">Beauty & Health</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <div className="container">
                    <p className="copyright__text">Ecobazar eCommerce &copy; 2021. All Rights Reserved</p>
                    <div className="payment__icons">
                        <div className="applepay__ico"><Link to="https://www.apple.com/apple-pay/" target='_blank'></Link></div>
                        <div className="visa__ico"><Link to="https://usa.visa.com/" target='_blank'></Link></div>
                        <div className="discover__ico"><Link to="https://www.discover.com/" target='_blank'></Link></div>
                        <div className="mastercard__ico"><Link to="https://www.mastercard.us/en-us.html" target='_blank'></Link></div>
                        <div className="securepayment__ico"><Link to="https://www.secure-payment-services.com/" target='_blank'></Link></div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}