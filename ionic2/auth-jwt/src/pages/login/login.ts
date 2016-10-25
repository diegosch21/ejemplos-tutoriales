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

  errorLogin: any = false;

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController) {
  }

  login() {
    this.errorLogin = false;
    let loading = this.showLoading();
    this.authService.authenticate(this.credentials)
      .then(status => {
        if (status) {
          this.navCtrl.setRoot(HomePage); // Cambia a home
        }
        else {
          this.errorLogin = "Invalid credentials";
        }
        loading.dismiss();
      })
      .catch(() => {
        this.errorLogin = "Error login";
        loading.dismiss();
      });
  }

  showLoading(): Loading{
    let loading = this.loadingCtrl.create({});
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 5000);

    return loading;
  }


}
