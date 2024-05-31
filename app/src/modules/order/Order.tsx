import { observer } from "mobx-react-lite"
import { cartStore } from "../../common/stores/CartStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

type FieldType = {
    username: string;
    email: string;
}

export const Order = observer(() => {
    const { isCartEmpty, totalPrice } = cartStore;

    const navigate = useNavigate();

    useEffect(() => {
        if (isCartEmpty) {
            navigate('../cart');
        };
    }, [isCartEmpty]);

    const handleOrderFinish = (value: FieldType) => {
        console.log(value);
        navigate('../result', {
            state: {
                userData: value
            }
        });
    };

    return <>
        {!isCartEmpty && <div className="">
            <Form
                onFinish={(value: FieldType) => handleOrderFinish(value)}
                onFinishFailed={() => console.log('Fail')}
            >
                <Form.Item <FieldType>
                    label="Имя"
                    name="username"
                    rules={[{ required: true, message: 'Введите Ваше имя' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item <FieldType>
                    label="Email"
                    name="email"
                    rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Оформить Заказ
                    </Button>
                </Form.Item>
            </Form>

            <h2>Сумма заказа: {totalPrice} $</h2>
        </div>
        }
    </>
})