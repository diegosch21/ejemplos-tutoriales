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

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController) {}

  logout() {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  // Runs when the page has loaded. This event only happens once per page being created.
  // If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
  ionViewDidLoad() {
    let loading = this.showLoading();
    this.userData = false;
    this.authService.getUserInfo()
      .then(status => {
        if (status) {
          this.userData = this.authService.userData;
        }
        loading.dismiss();
      })
      .catch(() => {
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
