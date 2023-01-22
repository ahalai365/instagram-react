import { createContext } from "react";
import { TCardData, TUserData } from "./types";

// @ts-ignore
export const CardArrContext = createContext<{
  data: Array<TCardData> | null;
  setCardsArr: (data: Array<TCardData>) => void;
}>();

// @ts-ignore
export const UserDataContext = createContext<{
  data: TUserData | null;
  setData: (data: TUserData | null) => void;
}>();

// @ts-ignore
export const NewCardContext = createContext<{
  data: TCardData | null;
  setData: (data: TCardData) => void;
}>();