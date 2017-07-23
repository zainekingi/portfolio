import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public height: Number;
  public count: Number;
  public btn: any;

  constructor() {
  }

  ngOnInit() {

    var vpH = window.innerHeight;
    this.height = vpH;

    this.btn = document.getElementById('dwnBtn');
    this.btn.addEventListener('click', function() {

      var c = 0;
      var h = window.innerHeight;
      var fn = setInterval(function() {

        if(c < h) {
          c ++;
          window.scrollTo(0, c);
        } else {
          clearInterval(fn);
        }
      }, 1);

    });

  }

}
