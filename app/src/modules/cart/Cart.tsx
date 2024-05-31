import { Button } from "antd";
import { cartStore } from "../../common/stores/CartStore"
import { CartProduct } from "./components/CartProduct";
import { EmptyCart } from "./components/EmptyCart";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import './Cart.css'

export const Cart = observer(() => {
    const { cartState, totalPrice } = cartStore;

    const navigate = useNavigate();

    const handleOrderButtonClick = () => {
        navigate('../order');
    };

    return <>
        {cartState.length === 0 ? 
            <EmptyCart />   :
            <div className="cart__wrapper">
                <CartProduct />

                <div className="total_price">Итого: {totalPrice}$</div>
                <div className="cart__btn">
                    <Button onClick={handleOrderButtonClick} type="primary">Оформить заказ</Button>
                </div>
            </div>
        }
    </>
})