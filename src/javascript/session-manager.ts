import { TLoginUserData, TUserDataResponse } from "../types";
import { api } from "./api";

export class SessionManager {
  start(): Promise<TUserDataResponse | void> {
    const token: string | null = localStorage.getItem("token");
    api.setupAuthToken(token);
    if (token) {
      return api.getUser();
    }
    return Promise.resolve();
  }

  _setupToken(token: string | null): void {
    if (token) {
      api.setupAuthToken(`Bearer ${token}`);
      localStorage.setItem("token", `Bearer ${token}`);
    } else {
      api.setupAuthToken(token);
      localStorage.removeItem("token");
    }
  }

  login(data: TLoginUserData): Promise<TUserDataResponse | null> {
    return api.login(data).then((responseBody) => {
      if (responseBody.success) {
        const token = responseBody.token;
        this._setupToken(token);
        return api.getUser();
      }

      return null
    });
    // .then((responseBody) => {
    //   return this._setupUser(responseBody.user);
    // });
  }

  logout() {
    // this._setupUser(null);
    this._setupToken(null);
  }
}

export const sessionManager = new SessionManager();
// sessionManager.start();
