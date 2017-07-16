import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    window.onscroll = function() {

      // Get the clients window height.
      var wnH = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

      var c = document.querySelectorAll('.section, .skill-item');

      // Loop through all the logos.
      for (var i = 0; i < c.length; i++) {

        // Hide all image elements.
        c[i].classList.add('opacity-0', 'slide-down');

        // Get the image elements offset top position.
        var vpOffset = c[i].getBoundingClientRect();

        if(vpOffset.top < wnH) {

          // Show the element
          c[i].classList.remove('opacity-0', 'slide-down');

          // Fade element in.
          c[i].classList.add('fade-in', 'slide-up');
        }
      }
    }; /* END: window onscroll method */

  }

}
