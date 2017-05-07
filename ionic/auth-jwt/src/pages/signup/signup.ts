import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/* Registro no implementado en mi API.
  Ver ejemplo: Ver en ejemplo: https://github.com/rajayogan/ionic2-authentication/blob/master/src/pages/signup/signup.ts */
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Signup Page');
  }

}
