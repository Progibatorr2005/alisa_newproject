import { IProduct } from "./product.interface"

export interface ICartItem {
    id: number
    productId: number
    product: IProduct
    quantity: number
    price: number
}