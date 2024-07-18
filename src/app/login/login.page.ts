import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "Email is required" },
      { type: "pattern", message: "Please enter a valid email" },
    ],
    password: [
      { type: "required", message: "Password is required" },
      { type: "minlength", message: "Password must be at least 5 characters long" },
      { type: "maxlength", message: "Password must have a maximum of 10 characters" },

    ]
  }
  constructor(private formBUilder: FormBuilder, private authService: AuthenticateService, private navCtrl: NavController) {
    this.loginForm = this.formBUilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ])
      )
    })
  }

  ngOnInit() {
  }

  loginUser(dataLogin: any) {
    console.log(dataLogin)
    this.authService.loginUser(dataLogin).then(res => {
      this.navCtrl.navigateForward("/home")
    })
  }

}
