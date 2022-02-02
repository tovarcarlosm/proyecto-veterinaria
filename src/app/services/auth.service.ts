import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/User.Model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "https://identitytoolkit.googleapis.com/v1/accounts";
  private apiKey = "AIzaSyDLWm4ZaRU2X7acJl5VSOnaR3CX3H-1JD4";

  constructor(private _http: HttpClient) { }

  login(user:UserModel){

  }

  signUp(user:UserModel){
    const data = {
      ...user,
      returnSecureToken: true
    };

    return this._http.post(`${this.url}:signUp?key=${this.apiKey}`, data);
  }

  logout(){

  }
}
