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
  avatar: string;
  email?: string;
  password: string;
  id?: string;
}

export type TUserResponse = {
  succes: true;
  userId: string;
} | {
  succes: false;
  error: string;
}

export type TLoginUserData = {
  email: string;
  password: string;
}

export type TLoginResponse = {
  succes: true;
  token: string;
} | {
  succes: false;
}

export type TLikeCardResponse = {
  succes: true;
  likes: Array<string>
} | {
  succes: false;
}

export type TDeleteCardResponse = {
  succes: true;
} | {
  succes: false;
  error: string;
}

export type TUserDataResponse = {
  succes: true;
  user: TUserData;
} | {
  succes: false;
}

export type TCardDataResponse = {
  succes: true;
  user: TCardData;
} | {
  succes: false;
}