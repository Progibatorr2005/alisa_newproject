import { instance } from "@/api/api.interceptor"
import { IPaymentResponse } from "@/types/payment.interface"

const PAYMENT = 'payment'

type TypeData = {
    rating: number
    text: string
}

export const PaymentService = {
    async createPayment(amount: number) {
        return instance.post<IPaymentResponse>(PAYMENT, {amount})
    },

}
