import { UserPage } from './../pages/user/user';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { API_ROOT_URL } from './config';

@Injectable()
export class AuthService {

  isLoggedin: boolean;
  authToken: string;
  user: any; // Data de usuario sacada del token
  userData: any;
  url_auth = API_ROOT_URL+"/auth/request-token";
  url_user = API_ROOT_URL+"/consorcista/v1/user"

  constructor(public http: Http) {
    this.http = http;
    this.isLoggedin = false;
    this.authToken = null;
  }

  useCredentials(token) {
    this.authToken = token;
    // ToDo obtener del token info del usuario
    this.user = {
      nombre: 'Fake name',
      email: 'Fake mail',
      id: 'Fake id',
      tipo: 'user.consorcista'
    };
    this.userData = null;
  }

  loadUserCredentials(): boolean {
    let token = window.localStorage.getItem('tutorial-ionic2-auth-token');
    if (token) {
      this.isLoggedin = true;
      this.useCredentials(token);
      return true;
    }
    else return false;
  }

  storeUserCredentials(token) {
    this.isLoggedin = true;
    window.localStorage.setItem('tutorial-ionic2-auth-token', token);
    this.useCredentials(token);
  }

  destroyUserCredentials() {
    this.isLoggedin = false;
    this.authToken = null;
    this.user = null;
    this.userData = null;
    window.localStorage.removeItem('tutorial-ionic2-auth-token');
  }

  authenticate(user): Promise<boolean> {
    let creds = "username=" + user.email + "&password=" + user.password;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.post(this.url_auth, creds, {headers})
        .subscribe(
          resp => {
            let json = resp.json();
            if(json.token){
              this.storeUserCredentials(json.token);
              resolve(true);
            }
            else {
              console.log(json);
              resolve(false);
            }
          },
          error => {
            console.log(error);
            resolve(false);
          }
        );
    });
  }

  logout() {
    this.destroyUserCredentials();
  }

  registro(user) {
    // No implementado en mi API.
    //  Ver ejemplo: https://github.com/rajayogan/ionic2-authentication/blob/master/src/pages/home/authservice.ts
  }

  // Obtiene info del endpoint de user data (no del jwt que ya está guardado)
  getUserInfo(): Promise<boolean> {
    if (!this.isLoggedin) {
      return new Promise(resolve => resolve(false));
    }
    // Si ya había obtenido la data del usuario la retorna sin volver a hacer el request
    if (this.userData) {
      return new Promise(resolve => resolve(true));
    }
    // Si no pide la data
    this.loadUserCredentials();
    let headers = new Headers({
      'Authorization': 'Bearer '+this.authToken
    });
    return new Promise(resolve => {
      this.http.get(this.url_user, {headers})
        .subscribe(
          resp => {
            let json = resp.json();
            if (json.data) {
              this.userData = json.data;
              resolve(true);
            }
            else {
              console.log(json);
              resolve(false);
            }
          },
          error => {
            console.log(error);
            resolve(false);
          }
        )
    })
  }

}
