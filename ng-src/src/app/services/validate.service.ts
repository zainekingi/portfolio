import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() {}

  // Validate user registration form.
  validateCF(newMsg){
    // Check if fields are empty.
    if(newMsg.name == undefined || newMsg.email == undefined || newMsg.message == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(email);
  }

}
