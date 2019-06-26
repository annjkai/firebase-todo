import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { map, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  currentUserId: any = {};

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
    this.currentUserId = this.firebaseAuth.authState.pipe(
      map(
        response => response.toJSON()
    ));
    /*
    this.currentUserId = this.firebaseAuth.authState.pipe(map(auth => {
      if (auth) {
        this.currentUserId = auth.uid;
      }
    }));
    */
  }

  signUpWithEmail(email: string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        // console.log('Success! ' + this.firebaseAuth.user);
        this.user.subscribe(res => console.log(res.uid));
      }).catch(err => {
        console.log('Something went wrong while signing up ' + err.message);
      });
  }

  signInWithEmail(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('You are signed in');
      }).catch(err => {
        console.log('Something went wrong while signing in ' + err.message);
      });
  }

  signOut() {
    this.firebaseAuth.auth.signOut();
  }

  sendUserId() {
    const myUserId = this.firebaseAuth.auth.currentUser.uid;
    return myUserId;
  }
}
