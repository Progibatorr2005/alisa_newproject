import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { IProduct } from "@/types/product.interface";
import { FC } from "react";
import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri';

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
    const { addToCart, removeFromCart } = useActions();
    const { items } = useCart();

    const currentElement = items.find(
        (cartItem: { product: { id: number; }; }) => cartItem.product.id === product.id
    );

    return (
        <div>
            <button className="button2"
                onClick={() =>
                    currentElement
                        ? removeFromCart({ id: currentElement.id })
                        : addToCart({
                            productId: product.id, // Добавляем productId
                            product,
                            quantity: 1,
                            price: product.price
                        })
                }
            >
                {currentElement ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
                <p>{currentElement ? "Удалить из корзины" : "Добавить в корзину"}</p>
            </button>
        </div>
    );
}

export default AddToCartButton;
