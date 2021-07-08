import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // signIn(): void {
  //   this.authService.signIn().then(user => {
  //     this.router.navigate(['course']);
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }
  signIn(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      localStorage.setItem('google_auth', JSON.stringify(user));
      this.router.navigate(['/course']);
    });
  }

}
