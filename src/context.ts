import { createContext } from "react";
import { TCardData, TProfileData, TUserData, TLoginUserData } from "./types";

// @ts-ignore
export const ProfileDataContext = createContext<{
  data: TProfileData;
  setData: (data: TProfileData) => void;
}>();

// @ts-ignore
export const CardArrContext = createContext<{
  data: Array<TCardData>;
  setCardsArr: (data: Array<TCardData>) => void;
}>();

// @ts-ignore
export const UserDataContext = createContext<{
  data: TUserData;
  setData: (data: TUserData) => void;
}>();

// @ts-ignore
export const LoginDataContext = createContext<{
  data: TLoginUserData;
  setData: (data: TLoginUserData) => void;
}>();

