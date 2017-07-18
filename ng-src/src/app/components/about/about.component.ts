import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var s = false;

    window.onscroll = onScroll;

      function onScroll() {

      s = true;

      // Get the clients window height.
      var wnH = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;


      var c = document.querySelectorAll('.section, .company-logo');

      // Loop through all the logos.
      for (var i = 0; i < c.length; i++) {

        // Hide all image elements.
        c[i].classList.add('opacity-0', 'slide-down');

        // Get the image elements offset top position.
        var vpOffset = c[i].getBoundingClientRect();

        // Check the parent containers offset top position.
        if (vpOffset.top < wnH) {

          // Show the element
          c[i].classList.remove('opacity-0', 'slide-down');

          // Fade element in.
          c[i].classList.add('fade-in', 'slide-up');
        }
      }
    } /* END: onScroll method */

    //  Set onScroll to fire every 1000ms.
    setInterval(function() {
      if(s) {
        s = false;
      }
    }, 1000);

  }

}
