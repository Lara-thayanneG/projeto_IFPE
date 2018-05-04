import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string

  constructor(private fireAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(email: string, password: string) {
    try {
      const result = await this.fireAuth.auth.signInWithEmailAndPassword(email, password);
      if (result) {
        console.log(result);
        this.navCtrl.setRoot('HomePage');
      }
    } catch(error) {
      console.log(error);
    }
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

}
