import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {  persistReducer, persistStore } from 'redux-persist' 
import storage from "redux-persist/lib/storage";
import authReducer from './authSlice'

const rootReducer = combineReducers({auth:authReducer}) 

const persistConfig = {
    key:'root',
    storage,
    version:1
}

const persistedReducer= persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export const persistor = persistStore(store)
