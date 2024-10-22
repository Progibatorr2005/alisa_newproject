import { ICartItem } from "@/types/cart.interface";
import { convertPrice } from "@/utils/convertPrice";
import Image from "next/image";
import { FC } from "react";
import CartActions from "./CartActions";

const CartItem: FC <{item: ICartItem}> = ({item}) => {
    return (
        <div className="card1">
            <Image style={{
                borderRadius: '6px'
            }}
                src={item.product.images[0]}
                width={100}
                height={100}
                
                alt={item.product.name}

            />

                <div>{item.product.name}</div>
                <div>{convertPrice(item.product.price)}</div>
                {/* <CartActions item={item} /> */}

        </div>
    )
}

export default CartItem