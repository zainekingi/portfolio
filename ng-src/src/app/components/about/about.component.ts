import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    window.onscroll = function() {

      var c = document.querySelectorAll('.section, .skill-item');

      // Loop through all the logos.
      for (var i = 0; i < c.length; i++) {

        // Hide all image elements.
        c[i].classList.add('opacity-0', 'slide-down');

        // Get the image elements offset top position.
        var vpOffset = c[i].getBoundingClientRect();

        // Check the parent containers offset top position.
        if (vpOffset.top < 500) {

          // Show the element
          c[i].classList.remove('opacity-0', 'slide-down');

          // Fade element in.
          c[i].classList.add('fade-in', 'slide-up');
        }
      }
    }; /* END: window onscroll method */

  }

}
