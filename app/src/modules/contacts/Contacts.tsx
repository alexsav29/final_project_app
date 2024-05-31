import { Link } from "react-router-dom"
import './Contacts.css'

export const Contacts = () => {
    return <div className="contacts">
        <div className="contact__text">Звоните нам в рабочее время</div>

        <img src="../../../public/icon/Contacts/contact__center__bg.jpg" alt="Contact Image" className="contact__image" />

        <Link className="location__link location" target='_blank' to="https://www.google.com/maps/search/Lincoln-+344,+Illinois,+Chicago,+USA/@41.833871,-87.8967705,11z/data=!3m1!4b1?entry=ttu">
            <span className="location__img"></span>
            <p className="location__text">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
        </Link>

        <Link className="phone__link" to="tel:+1 (219) 555-0114">
            <div className="phone__ico"></div>
            <p className="phone__number">Telephone: +1 (219) 555-0114</p>
        </Link>
    </div>
}