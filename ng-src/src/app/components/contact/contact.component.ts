import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  private contactForm: FormGroup;
  private name: FormControl;
  private email: FormControl;
  private message: FormControl;

  constructor() {

  }


  ngOnInit() {

    this.createFormControls();
    this.createForm();

  }

  /* Create new form controls */

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.message = new FormControl('', Validators.required);
  }


  /* Create new form instance */

  createForm() {
    this.contactForm = new FormGroup({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  /* Form submit check */

  checkForm() {

    if(this.contactForm.valid) {
      console.log("Form submitted");
      this.contactForm.reset();
    } else {
      console.log("Not valid?");
      this.contactForm.reset();
    }

  }

}
