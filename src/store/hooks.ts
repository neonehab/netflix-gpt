import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, AppState } from "./appStore";
import { useSelector } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector