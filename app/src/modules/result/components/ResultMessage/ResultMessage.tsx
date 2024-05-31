import { useEffect } from "react";
import { cartStore } from "../../../../common/stores/CartStore";
import { UserDataType } from "../../Result"
import { Button, Result } from 'antd';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

type ResultMessageProps = {
    data: UserDataType;
}

export const ResultMessage = ({data}: ResultMessageProps) => {
    const { username, email } = data;

    const { clearCart } = cartStore;

    const navigate = useNavigate();

    const goToCatalog = () => {
        navigate('../cart');
    } 

    useEffect(() => {
        clearCart();
    }, []);

    return <Result
            status="success"
            title={`Заказ на имя: ${username} с email: ${email} успешно оформлен`}
            subTitle={`Order number: ${new Date().getTime()}-${uuidv4()} Cloud server configuration takes 1-5 minutes, please wait.`}
            extra={[
                <Button onClick={goToCatalog} key="buy">Вернуться в Корзину</Button>,
            ]}
        />
}