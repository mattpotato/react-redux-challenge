import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./productReducer";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  product: productSlice,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;