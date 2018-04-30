import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationProvider {

  constructor(public auth: AngularFireAuth) {
  }

  login(email, senha) {
    this.auth.auth.signInWithEmailAndPassword(email, senha);
  }

}
