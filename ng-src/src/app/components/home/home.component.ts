import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public height: Number;

  constructor() {
  }

  ngOnInit() {

    var vpH = window.innerHeight;
    this.height = vpH;

  }

}
