import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { ICartItem } from "@/types/cart.interface";
import { FC } from "react";

const CartActions: FC <{item: ICartItem}> = ({item}) => {
    const {removeFromCart, changeQuantity} = useActions()
    const {items} = useCart()
    const quantity = items.find((cartItem: { id: number; }) => cartItem.id === item.id)?.quantity
    return(
        <div>
            {/* <div>
                <button onClick={() => changeQuantity({id: item.id, type: 'minus'})} disabled={quantity === 1}>
                    <FiMinus />
                </button>
                <input disabled readOnly value={quantity} />
                    <button onClick={() => changeQuantity({id: item.id, type: 'plus'})}>
                        <FiPlus />
                    </button>

                    <button onClick={() => removeFromCart({id: item.id})}>
                        <FiTrash />
                    </button>
            </div> */}
        </div>
    )
}

export default CartActions