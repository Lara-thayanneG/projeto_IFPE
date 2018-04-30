import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

import { User } from '../../models/user.model';

@Injectable()
export class UserProvider {

  userCollection: AngularFirestoreCollection<User>;
  user: User;

  constructor(
    public auth: AngularFireAuth,
    public firestore: AngularFirestore
  ) {
    this.userCollection = this.firestore.collection<User>('users');
  }

  login(email, senha) {
    this.auth.auth.signInWithEmailAndPassword(email, senha);
  }

  createUserProfile(user: User) {
    this.user = user;
    this.userCollection.add(user);
  }

}
