import { Component } from '@angular/core';

import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Do it!';

  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  signUpWithEmail() {
    this.authService.signUpWithEmail(this.email, this.password);
    this.email = this.password = '';
  }

  signInWithEmail() {
    this.authService.signInWithEmail(this.email, this.password);
    this.email = this.password = '';
  }

  signOut() {
    this.authService.signOut();
  }
}
