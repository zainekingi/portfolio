import { Component, OnInit } from '@angular/core';
import '../../../../assets/scripts/main.js';
declare var slider: any;

@Component({
  selector: 'app-tcs',
  templateUrl: './tcs.component.html',
  styleUrls: ['./tcs.component.css']
})

export class TcsComponent implements OnInit {

  constructor() {}

  ngOnInit(){

    (function() {
      new slider('slider');
    })();

  }

}
