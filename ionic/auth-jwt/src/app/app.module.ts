import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { auth_http_config } from './../providers/config';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { UserPage } from './../pages/user/user';
import { AuthService } from './../providers/authservice';
import { KeysObject } from './../pipes/keys-object';

// Configuración librería angular2-jwt
export function getAuthHttp(http) {
  return new AuthHttp(auth_http_config, http);
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UserPage,
    KeysObject
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UserPage
  ],
  providers: [
    Storage,
    AuthService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    JwtHelper
  ]
})
export class AppModule {}
