import { UserPage } from './../user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from './../../providers/authservice';
import { LoginPage } from './../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: any;

  constructor(public navCtrl: NavController, public authService: AuthService) {
    this.user = authService.user;
  }

  logout() {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  viewUser() {
    this.navCtrl.push(UserPage);
  }

}
