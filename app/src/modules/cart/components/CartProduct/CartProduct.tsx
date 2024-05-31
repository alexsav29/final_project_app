import { Button, Image, Modal, notification } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { cartStore } from "../../../../common/stores/CartStore";
import { observer } from "mobx-react-lite";
import './CartProduct.css';

export const CartProduct = observer(() => {
    const { cartState, clearCart, deleteProductInCart } = cartStore;

    const { confirm } = Modal;
    
    const handleDeleteProduct = (productId: number) => {
        confirm({
            title: 'Вы действительно хотите удалить товар?',
            icon: <ExclamationCircleFilled />,
            content: 'Удаление .....',
            okText: "Удалить",
            onOk() {
                deleteProductInCart(productId)
                notification.success({
                    message: "Удаление прошло успешно"
                })
            },
            onCancel() {
            },
          });  
    };

    return <>
        {cartState && cartState.map((product) => <div key={product.id} className="cart__item">
            <div className="cart__item__img">
                <Image src={product.Image} width={150}/>
            </div>
            <div className="cart__item__description">
                <h3 className="product__title">{product.ProductName}</h3>
                {/* <p>{product.description}</p> */}
                <div className="cart__item__description__footer">
                    <p  className="cart__item__sum">Сумма {product.Price[0].Price*product.count}$ за {product.count}/шт. </p>
                    <Button className="cart__item__btn" onClick={()=> handleDeleteProduct(product.id)} type="primary" danger>Удалить</Button>
                </div>
            </div>
        </div>)}
    </>
})