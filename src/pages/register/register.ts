import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  name: string;
  email: string;
  password: string

  constructor(private fireAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(name: string, email: string, password: string) {
    try {
      const register = await this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
      if (register) {
        console.log(register);
        await this.fireAuth.auth.currentUser.updateProfile({ displayName: name, photoURL: '' });
        this.navCtrl.setRoot('HomePage');
      }
    } catch (error) {
      console.log(error);
    }
  }

  login(email: string, password: string) {
    this.navCtrl.push('LoginPage');
  }

}
