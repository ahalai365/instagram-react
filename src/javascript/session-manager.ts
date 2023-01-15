import { api } from "./api";

export class SessionManager {
  start() {
    const token = localStorage.getItem("token");
    api.setupAuthToken(token);
    if (token) {
      return api.getUser();
    }
    return Promise.resolve();
  }

  _setupUser(user) {
    if (user) {
      console.log("setup", user);
    }
  }

  _setupToken(token) {
    if (token) {
      api.setupAuthToken(`Bearer ${token}`);
      localStorage.setItem("token", `Bearer ${token}`);
    } else {
      api.setupAuthToken();
      localStorage.removeItem("token");
    }
  }

  login(data) {
    return api.login(data).then((responseBody) => {
      const token = responseBody.token;
      this._setupToken(token);
      return api.getUser();
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
