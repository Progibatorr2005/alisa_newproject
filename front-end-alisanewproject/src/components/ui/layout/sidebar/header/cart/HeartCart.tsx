import { useCart } from "@/hooks/useCart";
import { useOutside } from "@/hooks/useOutside";
import SquareButton from "@/ui/button/SquareButton";
import { convertPrice } from "@/utils/convertPrice";
import { useRouter } from "next/router";
import { FC } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import CartItem from "./cart-item/cart-actions/Cartitem";
import { ICartItem } from "@/types/cart.interface";
import { useMutation } from "@tanstack/react-query";
import { OrderService } from "@/services/order.sevice";
import { AxiosResponse } from "axios";
import { useActions } from "@/hooks/useActions";

interface IOrderResponse {
    confirmation: {
        confirmationUrl: string; // изменено на camelCase
    };
}

interface IOrderVariables {
    items: Array<{ price: number; quantity: number; productId: number }>;
}

const HeaderCart: FC = () => {
    const { isShow, setIsShow, ref } = useOutside(false);
    const { items, total } = useCart();
    const { reset } = useActions();
    const { push } = useRouter();

    const mutation = useMutation<AxiosResponse<IOrderResponse>, Error, IOrderVariables>({
        mutationFn: (orderVariables) => OrderService.place(orderVariables),
        onSuccess: (data) => {
            console.log("Server response: ", data.data); // Логирование полного ответа сервера
            const confirmationUrl = data.data.confirmation?.confirmationUrl; // изменено на camelCase
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
        <div style={{ position: 'relative' }} ref={ref}>
            <SquareButton
                Icon={RiShoppingCartLine}
                onClick={() => {
                    setIsShow(!isShow);
                }}
                number={items.length}
            />
            <div className="heart_cart">
                <div style={{ fontSize: '30px', marginBottom: '20px' }}>Моя корзина</div>
                <div className="heart_card">
                    <div className="heart_cart_items">
                        {items.length ? (
                            items.map((item: ICartItem) => <CartItem item={item} key={item.id} />)
                        ) : (
                            <div>Корзина пустая</div>
                        )}
                    </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <div style={{ fontSize: '20px' }}>Итого: </div>
                    <div>{convertPrice(total)}</div>
                </div>
                <div>
                    <button className="button1" onClick={handleCreateOrder}>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderCart;
