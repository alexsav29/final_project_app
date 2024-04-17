import { Button } from '../Button'
import './Footer2.css'

export const Footer2 = () => {
    return <>
        <footer className="footer">
            <div className="footer__subscribe">
                <div className="container">
                    <div className="subscribe__text">
                        <div className="subscribe__mail__ico"></div>
                        <div className="subscribe__text__container">
                            <h2 className="subscribe__text__title">Subcribe our Newsletter</h2>
                            <p className="subscribe__text__description">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                        </div>
                    </div>
                    <div className="subscribe__info">
                        <div className="subscribe__input__container">
                            <input type="text" name="" id="" className="subscribe__input" placeholder='Your email address' />
                            <Button size='large' type='fill'>Subscribe</Button>
                        </div>
                        <div className="subscribe__social">
                            <div className="facebook__ico"><a href="#"></a></div>
                            <div className="twitter__ico"><a href="#"></a></div>
                            <div className="pinterest__ico"><a href="#"></a></div>
                            <div className="instagram__ico"><a href="#"></a></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer__pages">
                <div className="container">
                    <div className="footer__pages__info">
                        <div className="footer__logo"><a href="#"></a></div>
                        <p className="footer__description">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                        <div className="footer__info">
                            <a href='tel:+1(219)555-0114' className="footer__phone">+1 (219) 555-0114</a>
                            <p className="footer__info__text">or</p>
                            <a href="mailto:Proxy@gmail.com" className='footer__email'>Proxy@gmail.com</a>
                        </div>
                    </div>
                    <ul className="footer__pages__items">
                        <li className="footer__pages__item">
                            <a href="#">My Account</a>
                            <ul className="footer__pages__subitems">
                                <li className="footer__pages__subitem"><a href="#">My Account</a></li>
                                <li className="footer__pages__subitem"><a href="#">Order History</a></li>
                                <li className="footer__pages__subitem"><a href="#">Shoping Cart</a></li>
                                <li className="footer__pages__subitem"><a href="#">Wishlist</a></li>
                            </ul>
                        </li>
                        <li className="footer__pages__item">
                            <a href="#">Helps</a>
                            <ul className="footer__pages__subitems">
                                <li className="footer__pages__subitem"><a href="#">Contact</a></li>
                                <li className="footer__pages__subitem"><a href="#">Faqs</a></li>
                                <li className="footer__pages__subitem"><a href="#">Terms & Condition</a></li>
                                <li className="footer__pages__subitem"><a href="#">Privacy Policy</a></li>
                            </ul>
                        </li>
                        <li className="footer__pages__item">
                            <a href="#">Proxy</a>
                            <ul className="footer__pages__subitems">
                                <li className="footer__pages__subitem"><a href="#">About</a></li>
                                <li className="footer__pages__subitem"><a href="#">Shop</a></li>
                                <li className="footer__pages__subitem"><a href="#">Product</a></li>
                                <li className="footer__pages__subitem"><a href="#">Track Order</a></li>
                            </ul>
                        </li>
                        <li className="footer__pages__item">
                            <a href="#">Download Mobile App</a>
                            <ul className="footer__pages__subitems">
                                <li className="footer__pages__subitem applestore__ico"><a href="#"></a></li>
                                <li className="footer__pages__subitem googleplay__ico"><a href="#"></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <div className="container">
                    <p className="copyright__text">Ecobazar eCommerce &copy; 2021. All Rights Reserved</p>
                    <div className="payment__icons">
                        <div className="applepay__ico"><a href="#"></a></div>
                        <div className="visa__ico"><a href="#"></a></div>
                        <div className="discover__ico"><a href="#"></a></div>
                        <div className="mastercard__ico"><a href="#"></a></div>
                        <div className="securepayment__ico"><a href="#"></a></div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}