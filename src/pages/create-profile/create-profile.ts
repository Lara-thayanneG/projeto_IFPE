import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user'

@Component({
  selector: 'page-create-profile',
  templateUrl: 'create-profile.html',
})
export class CreateProfilePage {

  constructor(
    public navCtrl: NavController,
    public userProvider: UserProvider
  ) { }

  private profileSubmit() {
    
  }

}
