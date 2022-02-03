import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/User.Model";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "https://identitytoolkit.googleapis.com/v1/accounts";
  private apiKey = "AIzaSyDLWm4ZaRU2X7acJl5VSOnaR3CX3H-1JD4";

  userToken: string = "";

  constructor(private _http: HttpClient) {
    this.getToken();
  }

  login(user:UserModel){
    const data = {
      ...user,
      returnSecureToken: true
    };

    return this._http.post(`${this.url}:signInWithPassword?key=${this.apiKey}`, data)
      .pipe(
        map( resp => {
          // @ts-ignore
          this.saveToken( resp['idToken'] );
          return resp;
        })
      )
  }

  signUp(user:UserModel){
    const data = {
      ...user,
      returnSecureToken: true
    };

    return this._http.post(`${this.url}:signUp?key=${this.apiKey}`, data)
      .pipe(
        map( resp => {
          // @ts-ignore
          this.saveToken( resp['idToken'] );
          return resp;
        })
      )
  }

  logout(){
    localStorage.removeItem('idToken');
  }

  private saveToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('idToken', idToken);
  }

  getToken(){
    if( localStorage.getItem('idToken') ){
      // @ts-ignore
      this.userToken = localStorage.getItem('idToken');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuth(): boolean {
    return this.userToken.length > 2;
  }
}
