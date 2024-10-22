import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { useOutside } from "@/hooks/useOutside";
import { OrderService } from "@/services/order.sevice";
import { ICartItem } from "@/types/cart.interface";
import Meta from "@/ui/Meta";
import SquareButton from "@/ui/button/SquareButton";
import Layout from "@/ui/layout/Layout";
import CartItem from "@/ui/layout/sidebar/header/cart/cart-item/cart-actions/Cartitem";
import { convertPrice } from "@/utils/convertPrice";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FC } from "react";
import { RiShoppingCartLine } from "react-icons/ri";

interface IOrderResponse {
    confirmation: {
        confirmation_url: string; // Используем snake_case
    };
}

interface IOrderVariables {
    items: Array<{ price: number; quantity: number; productId: number }>;
}

const CartPage: FC = () => {

    const { isShow, setIsShow, ref } = useOutside(false);
    const { items, total } = useCart();
    const { reset } = useActions();
    const { push } = useRouter();

    const mutation = useMutation<AxiosResponse<IOrderResponse>, Error, IOrderVariables>({
        mutationFn: async (orderVariables) => {
            const response = await OrderService.place(orderVariables);
            // Адаптируем данные, чтобы привести к ожидаемому формату confirmation_url
            const adaptedData = {
                ...response.data,
                confirmation: {
                    confirmation_url: response.data.confirmation.confirmationUrl, // Приведение к snake_case
                },
            };
            return { ...response, data: adaptedData };
        },
        onSuccess: (data) => {
            console.log("Server response: ", data.data); // Логирование полного ответа сервера
            const confirmationUrl = data.data.confirmation?.confirmation_url; // Используем snake_case
            console.log("Confirmation URL: ", confirmationUrl); // Логирование для проверки URL
            if (confirmationUrl) {
                window.location.href = confirmationUrl; // Перенаправление на страницу оплаты
            } else {
                console.error("Confirmation URL is missing.");
            }
            reset();
        },
        onError: (error) => {
            console.error("Error creating order:", error);
        }
    });

    const handleCreateOrder = () => {
        const orderItems = items.map((item: ICartItem) => ({
            price: parseFloat(item.price.toFixed(2)),
            quantity: item.quantity,
            productId: item.product.id // Использование product.id
        }));
        console.log("Order Items: ", orderItems); // Логирование для проверки
        mutation.mutate({ items: orderItems });
    };

    return (
        <Meta title="Корзина">
            <Layout>
                <div className="header1">Моя корзина</div>
                <div className="cart_container">
                    <div className="card_container">
                        {items.length ? (
                            items.map((item: ICartItem) => <CartItem item={item} key={item.id} />)
                        ) : (
                            <div>Корзина пустая</div>
                        )}
                    </div>
                    <div className="total">
                        <div style={{ fontSize: '40px' }}>Итого: </div>
                        <div style={{marginBottom: '30px', fontSize: '30px', color: '#131313'}}>{convertPrice(total)}</div>
                        <button className="button1" onClick={handleCreateOrder}>Оформить заказ</button>
                    </div>
                </div>
            </Layout>
        </Meta>
    );
}

export default CartPage;
