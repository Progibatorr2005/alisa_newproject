import { IOrder } from "./order.interface"
import { IProduct } from "./product.interface"

export interface IUser {
    id: string;
    email: string
    name: string
    avatarPath: string
    phone: string
}


export interface IFullUser extends IUser {
    favorites: IProduct[]
    orders: IOrder[]
}