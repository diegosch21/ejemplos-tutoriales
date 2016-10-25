import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {

  isLoggedin: boolean;
  authToken: string;
  url_auth = "http://api.consorcioabierto.local/auth/request-token";
  url_user = "http://api.consorcioabierto.local/consorcista/v1/user"

  constructor(public http: Http) {
    this.http = http;
    this.isLoggedin = false;
    this.authToken = null;
  }

  storeUserCredentials(token) {
    window.localStorage.setItem('tutorial-ionic2-auth-token', token);
    this.useCredentials(token);
  }

  useCredentials(token) {
    this.isLoggedin = true;
    this.authToken = token;
  }

  loadUserCredentials() {
    let token = window.localStorage.getItem('tutorial-ionic2-auth-token');
    this.useCredentials(token);
  }

  destroyUserCredentials() {
    this.isLoggedin = false;
    this.authToken = null;
    window.localStorage.removeItem('tutorial-ionic2-auth-token');
  }

  authenticate(user) {
    let creds = "name=" + user.name + "&password=" + user.password;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.post(this.url_auth, creds, {headers})
        .subscribe(
          resp => {
            let json = resp.json();
            if(json.token){
              this.storeUserCredentials(json.token);
              console.log('User token: ',this.authToken);
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

  addUser(user) {
    // No implementado en mi API.
    //  Ver ejemplo: https://github.com/rajayogan/ionic2-authentication/blob/master/src/pages/home/authservice.ts
  }

  getUserInfo() {
    this.loadUserCredentials();
    console.log('Get user info. Token: ',this.authToken);
    let headers = new Headers();
    headers.append('Authorization','Bearer '+this.authToken);
    return new Promise(resolve => {
      this.http.get(this.url_user, {headers})
        .subscribe(
          resp => {
            let json = resp.json();
            if (json.data) {
              resolve(json.data);
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

  logout() {
    this.destroyUserCredentials();
  }

}
