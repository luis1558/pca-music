import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      if (
        credentials.email == "luis@gmail.com" && credentials.password == 123456
      ){
        accept("Login correcto")
      }else {
        reject("Login incorrecto")
      }
    })
  }
}
