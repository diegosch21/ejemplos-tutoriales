import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { AuthService } from './../providers/authservice';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, public authService: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.checkPrevAuth();
  }

  checkPrevAuth() {
    if (this.authService.loadUserCredentials()) {
      this.rootPage = HomePage;
    }
    else{
      this.rootPage = LoginPage;
    }
  }
}
