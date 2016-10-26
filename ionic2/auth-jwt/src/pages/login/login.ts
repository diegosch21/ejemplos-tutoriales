import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from './../../providers/authservice';
import { HomePage } from './../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  credentials = {
    email: "",
    password: ""
  };
  erroresLogin: any = [];
  loading: Loading;

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController) {
  }

  login() {
    this.erroresLogin = [];
    this.showLoading();
    this.authService.authenticate(this.credentials)
      .then(() => {
        this.navCtrl.setRoot(HomePage); // Cambia a home
        this.loading.dismiss();
      })
      .catch((err) => {
        this.erroresLogin = [];
        err.forEach(error => {
          this.erroresLogin.push(error.detail || error.title);
        });
        this.loading.dismiss();
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({});
    this.loading.present();
    setTimeout(() => {
      this.loading.dismiss();
    }, 5000);
  }


}
