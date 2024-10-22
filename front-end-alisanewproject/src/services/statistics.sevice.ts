
import { instance } from "@/api/api.interceptor"
import { IReview } from "@/types/review.interface"

const STATUSTICS = 'review'

export type StatusticsResponse = {
    name: string
    value: number
}[]

export const StatusticsService = {
    async getMain() {
        return instance<IReview[]> ({
            url: `${STATUSTICS}/main`,
            method: 'GET'
        })
    }
}
