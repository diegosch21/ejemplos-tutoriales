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

  // data de user mostrado en vista obtenida de authService

  constructor(public navCtrl: NavController, public authService: AuthService) {
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
    this.authService.logout();
  }

  viewUser() {
    this.navCtrl.push(UserPage);
  }

}
