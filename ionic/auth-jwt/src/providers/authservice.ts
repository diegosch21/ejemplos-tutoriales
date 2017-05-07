import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { API_ROOT_URL } from './config';

@Injectable()
export class AuthService {

  isLoggedin: boolean;
  authToken: string;
  user: any; // Data de usuario sacada del token
  userData: any;
  url_auth = API_ROOT_URL+"/auth/request-token";
  url_user = API_ROOT_URL+"/consorcista/v1/user";

  constructor(public http: Http, public storage: Storage, public authHttp: AuthHttp, public jwtHelper: JwtHelper) {
    this.http = http;
    this.isLoggedin = false;
    this.authToken = null;
  }

  getTokenData(token) {
    this.authToken = token;
    // Obtener del token info del usuario
    let token_data = this.jwtHelper.decodeToken(token);
    this.user = {
      nombre: token_data.nombre,
      email: token_data.email,
      id: token_data.id,
      tipo: token_data.tipo,
      ufs: token_data.ufs
    };
    this.userData = null;
  }

  loadUserToken(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.storage.get('tutorial-ionic2-auth-token')
        .then((token) => {
          if (token) {
            this.isLoggedin = true;
            this.getTokenData(token);
            resolve();
          }
          else reject();
        });
    });
  }

  private handleError(error: Response | any, reject) {
    let errors = error.json().errors || [{detail: 'Server error'}];
    console.log(errors);
    reject(errors);
  }

  authenticate(user): Promise<any> {
    let creds = "username=" + user.email + "&password=" + user.password;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise((resolve,reject) => {
      this.http.post(this.url_auth, creds, {headers})
        .map(resp => resp.json()) // parsea el response y retorna Oservable
        .subscribe(
          resp => {
            if(resp.token){
              this.authSuccess(resp.token);
              resolve();
            }
            else {
              reject({errors: resp.errors});
            }
          },
          error => this.handleError(error,reject)
        );
    });
  }

  authSuccess(token) {
    this.isLoggedin = true;
    this.storage.set('tutorial-ionic2-auth-token', token);
    this.getTokenData(token);
  }

  logout() {
    this.isLoggedin = false;
    this.authToken = null;
    this.user = null;
    this.userData = null;
    this.storage.remove('tutorial-ionic2-auth-token');
  }

  registro(user) {
    // No implementado en mi API.
    //  Ver ejemplo: https://github.com/rajayogan/ionic2-authentication/blob/master/src/pages/home/authservice.ts
  }

  // Obtiene info del endpoint de user data (no del jwt que ya está guardado)
  getUserInfo(): Promise<void> {
    if (!this.isLoggedin) {
      return Promise.reject({reson: "No logueado"});
    }
    // Si ya había obtenido la data del usuario la retorna sin volver a hacer el request
    if (this.userData) {
      return Promise.resolve();
    }
    // Si no pide la data - request autenticado
    return new Promise((resolve,reject) => {
      this.authHttp.get(this.url_user)
      .map(resp => resp.json()) // parsea response
      .subscribe(
        resp => {
          if (resp.data) {
            this.userData = resp.data;
            resolve();
          }
          else {
            reject({reason: "Resp sin data.", resp});
          }
        },
        error => {
          reject({reason: "Error GET", error});
        }
      )
    });
  }

}
