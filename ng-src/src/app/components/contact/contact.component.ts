import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public height: Number;

  constructor() { }

  ngOnInit() {
    var vpH = window.innerHeight;
    this.height = vpH;
  }

}
