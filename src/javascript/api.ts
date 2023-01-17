import { TCardData } from '../types';
import { TUserData } from '../types';
import { TUserResponse } from '../types';
import { TLoginUserData } from '../types';
import { TLoginResponse } from '../types';
import { TLikeCardResponse } from '../types';
import { TDeleteCardResponse } from '../types';
import { TUserDataResponse } from '../types';
import { TCardDataResponse } from '../types';

class Api {
  private _baseUrl: string;
  private _headers: any;

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
    this._headers = {
      'Content-Type': 'application/json'
    };
  }

  setupAuthToken(token: string | null): void {
    if (token) {
      this._headers.Authorization = `${token}`;
    } else {
      delete this._headers.Authorization;
    }
  }

  _delete(url: string, body: object): Promise<TDeleteCardResponse> {
    return fetch(url, {
      method: 'DELETE',
      headers: this._headers,
      body: JSON.stringify(body)
    }).then((response: Response) => {
      return this._processResponse<TDeleteCardResponse>(response)
    });
  }

  _get<T>(url: string): Promise<T> {
    return fetch(url, {
      method: 'GET',
      headers: this._headers,
      }).then((response) => {
        return this._processResponse<T>(response)
      });
  }

  _post<T>(url: string, body: object): Promise<T> {
    return fetch(url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(body)
    }).then((response) => {
      return this._processResponse<T>(response)
    });
  }

  _processResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject();
    }
  }

  login(loginData: TLoginUserData): Promise<TLoginResponse> {
    return this._post<TLoginResponse>(`${this._baseUrl}/user/login`, loginData);
  }

  register(registerData: TUserData): Promise<TUserResponse> {
    return this._post<TUserResponse>(`${this._baseUrl}/user/register`, registerData);
  }

  getUser(): Promise<TUserDataResponse> {
    return this._get<TUserDataResponse>(`${this._baseUrl}/user/profile`);
  }

  getAllcards(): Promise<TCardDataResponse> {
    return this._get<TCardDataResponse>(`${this._baseUrl}/cards`);
  }

  createCard(data: TCardData): Promise<TCardData> {
    return this._post<TCardData>(`${this._baseUrl}/cards`, data);
  }

  likeCard(cardId: string): Promise<TLikeCardResponse> {
    return this._post<TLikeCardResponse>(`${this._baseUrl}/cards/like`, { cardId });
  }

  deleteCard(cardId: string): Promise<TDeleteCardResponse> {
    return this._delete(`${this._baseUrl}/cards`, { cardId });
  }

  updateUser(updateData: TUserData): Promise<TUserData> {
    return this._post<TUserData>(`${this._baseUrl}/user/update`, updateData);
  }
}

export const api = new Api(`http://localhost:8200`);