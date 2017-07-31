import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(
    private validateService: ValidateService,
    private flashMessages: FlashMessagesService,
    private router: Router
  ) { }


  ngOnInit() {}

  /* On contact form submission */
  cfSubmit() {
    //  create new message instance.
    const msg = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    // check required fields.
    if(!this.validateService.validateCF(msg)) {
      // display error.
      this.flashMessages.show('Oh No! All fields are required!', { cssClass: 'alert-danger', timeout: 2000 });
      this.flashMessages.grayOut(true);
      return false;
    }

    // validate email.
    if(!this.validateService.validateEmail(msg.email)) {
      // display error.
      this.flashMessages.show('Jeepers! That does\'t look right? Are you sure that\'s your email?', { cssClass: 'alert-danger', timeout: 8000 });
      this.flashMessages.grayOut(true);
      return false;
    }

    // successful submission.
    if(this.validateService.validateCF(msg) && this.validateService.validateEmail(msg.email)) {
      // display message.
      this.flashMessages.show('Hey ' + msg.name + ', thanks for the message, I will get back to you soon as ;-)', { cssClass: 'alert-success', timeout: 10000 });
      this.flashMessages.grayOut(false);
      this.router.navigate(['/']);
    }

  }


}
