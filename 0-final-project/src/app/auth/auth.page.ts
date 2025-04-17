import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false,
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;

  email!: string;
  pass!: string;

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingController.create({
      keyboardClose: true,
      message: 'Logging in...',
    }).then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigate(['/places/tabs/discover']);
      }, 1500);
    })
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const pass = form.value.pass;

    console.log(email, pass);

    if (this.isLogin) {
      // send login request
    } else {
      // send signup request
    }
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
}
