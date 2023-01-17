import { createContext } from "react";
import { TCardData, TUserData } from "./types";

// @ts-ignore
// export const ProfileDataContext = createContext<{
//   data: TProfileData;
//   setData: (data: TProfileData) => void;
// }>();

// @ts-ignore
export const CardArrContext = createContext<{
  data: Array<TCardData>;
  setCardsArr: (data: Array<TCardData>) => void;
}>();

// @ts-ignore
export const UserDataContext = createContext<{
  data: TUserData | null;
  setData: (data: TUserData | null) => void;
}>();

// @ts-ignore
// export const LoginDataContext = createContext<{
//   data: TLoginUserData;
//   setData: (data: TLoginUserData) => void;
// }>();

// @ts-ignore
export const NewCardContext = createContext<{
  data: TCardData;
  setData: (data: TCardData) => void;
}>();