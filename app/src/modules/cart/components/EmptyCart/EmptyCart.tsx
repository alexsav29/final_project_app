import EmptyCartIcon from '../../../../../public/icon/Cart/ic_empty.svg';
import './EmptyCart.css'

export const EmptyCart = () => {
    return <div className='empty__cart'>
        <EmptyCartIcon />
        <h3 className="empty__cart__text">Корзина пуста</h3>
    </div>
}