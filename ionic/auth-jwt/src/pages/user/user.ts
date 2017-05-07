import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { AuthService } from './../../providers/authservice';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  userData: any = false;
  loading: Loading;

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController) {}

  logout() {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  // Runs when the page has loaded. This event only happens once per page being created.
  // If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
  ionViewDidLoad() {
    this.showLoading();
    this.userData = false;
    this.authService.getUserInfo()
      .then(() => {
        this.userData = this.authService.userData;
        this.loading.dismiss();
      })
      .catch((err) => {
        console.log(err);
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
