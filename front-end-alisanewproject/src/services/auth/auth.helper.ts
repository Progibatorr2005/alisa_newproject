// auth.helper.ts
import { ITokens, IAuthResponse } from "@/store/user/user.interface";
import Cookies from "js-cookie";

export const getAccessToken = () => {
    const accessToken = Cookies.get('accessToken');
    return accessToken || null;
};

export const getUserFormStorage = () => {
    return JSON.parse(localStorage.getItem('user') || '{}');
};

export const saveTokensStorage = (data: ITokens) => {
    Cookies.set('accessToken', data.accessToken);
    Cookies.set('refreshToken', data.refreshToken);
};

export const removeFromStorage = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    localStorage.removeItem('user');
};

export const saveToStorage = (data: IAuthResponse) => {
    // Удаляем рекурсивный вызов
    localStorage.setItem('user', JSON.stringify(data.user));
    saveTokensStorage(data); // Если нужно сохранять токены тоже
};
