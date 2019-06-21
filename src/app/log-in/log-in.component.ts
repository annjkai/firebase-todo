import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

    signInWithGoogle() {
      this.authService.signInWithGoogle()
      .then((res) => {
        this.router.navigate(['dashboard']);
      }).catch((err) => console.log(err));
    }

    signInWithFacebook() {
      this.authService.signInWithFacebook()
      .then((res) => {
        this.router.navigate(['dashboard']);
      }).catch((err) => console.log(err));
    }

  ngOnInit() {
  }

}
