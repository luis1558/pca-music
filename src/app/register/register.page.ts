import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "Email is required" },
      { type: "pattern", message: "Please enter a valid email" },
    ],
    password: [
      { type: "required", message: "Password is required" },
      { type: "minlength", message: "Password must be at least 5 characters long" },
      { type: "maxlength", message: "Password must have a maximum of 10 characters" },

    ],
    name: [
      { type: "required", message: "Name is required" },
      { type: "minlength", message: "Name must be at least 3 characters long" },
      { type: "pattern", message: "please enter valid name" }
    ],
    last_name: [
      { type: "required", message: "Last name is required" },
      { type: "minlength", message: "Last name must be at least 3 characters long" },
      { type: "pattern", message: "please enter valid Last name" }
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthenticateService
  ) {
    this.registerForm = this.formBuilder.group({
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
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]+$')
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]+$') 
        ])
        ),
    })
  }

  ngOnInit() {
  }

  goToLogin() {
    this.navCtrl.navigateBack("/login");
  }

  register(registerData: any){
    console.log(registerData);
    this.storage.set("user", registerData);
    this.authService.registerUser(registerData).then( res => {
      this.navCtrl.navigateBack("/login");
    });
  }

}
