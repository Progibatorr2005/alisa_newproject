import { IUser } from "@/types/user.interface"


export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IInitialsState {
    user: IUserState | null
    isLoading: boolean
}

export interface IEmailPassword {
    email: string
    password: string
}

export interface IAuthResponse extends ITokens {
    user: IUser
}

export interface IUserState {
    id: string;
    name: string;
    email: string;
    // Добавьте другие поля по мере необходимости
}

