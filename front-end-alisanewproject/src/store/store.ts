import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userSlice } from './user/user.slice';
import { cartSlice } from './user/cart/cart.slice';

const persistConfig = {
    key: 'alisa',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    user: userSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Экспортируем переменные один раз
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export const persistor = persistStore(store);

// Экспортируем только `TypeRootState`
export type TypeRootState = ReturnType<typeof store.getState>;
