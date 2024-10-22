
import { instance } from "@/api/api.interceptor"
import { ICartItem } from "@/types/cart.interface"
import { IOrder } from "@/types/order.interface"


const ORDERS = 'orders'

enum EnumOrderStatus {
    PENDING = 'PENDING',
    PAYED = 'PAYED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED'
  }

type TypeData = {
    status?: EnumOrderStatus
    items: {
        quantity: number
        price: number
        productId: number
    }[]
}


export const OrderService = {
    async getAll() {
        return instance<IOrder[]> ({
            url: ORDERS,
            method: 'GET'
        })
    },

    async place(data: TypeData){
        return instance<{confirmation: {confirmationUrl: string}}> ({
            url: ORDERS,
            method: 'POST',
            data
        })
    }
}
