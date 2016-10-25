import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { UserPage } from './../pages/user/user';
import { AuthService } from './../providers/authservice';
import { KeysObject } from './../pipes/keys-object';

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
  providers: [AuthService]
})
export class AppModule {}
