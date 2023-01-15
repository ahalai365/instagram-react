export type TCardData = {
  id: string;
  title: string;
  url: string;
  userId: string;
  likes: Array<string>;
};

export type TUserData = {
  name: string;
  description: string;
  avatar?: string;
  email?: string;
  password?: string;
  id?: string;
} | {}

export type TUserResponse = {
  success: true;
  userId: string;
} | {
  success: false;
  error: string;
}

export type TLoginUserData = {
  email: string;
  password: string;
}

export type TLoginResponse = {
  success: true;
  token: string;
} | {
  success: false;
}

export type TLikeCardResponse = {
  success: true;
  likes: Array<string>
} | {
  success: false;
}

export type TDeleteCardResponse = {
  success: true;
} | {
  success: false;
  error: string;
}

export type TUserDataResponse = {
  success: true;
  user: TUserData;
} | {
  success: false;
}

export type TCardDataResponse = Array<TCardData>;

// export type TProfileData = {
//   name: string;
//   description: string;
// } | {}