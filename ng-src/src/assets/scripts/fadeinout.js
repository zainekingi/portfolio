/* ==================================================
*   FILE:   FADEINOUT.JS
*   AUTHOR: Zaine Kingi
*   VER:    1.0
*   DATE:   19-7-17
*   DESC:   Main application file for section fade-in-out
*           functionality.
*   INPUT:  Takes a list of elements.
*   OUTPUT: Dynamically add and remove classes to elements.
*   .................................................
*                   CHANGE LOG
*   -------------------------------------------------
*   VER:  DATE:     CHANGES:
*   -------------------------------------------------
*   1.0   19-7-17   Initial release.
* ------------------------------------------------ */

var s = false;

window.onscroll = fadeInOut;

function fadeInOut() {

  s = true;

  // Get the clients window height.
  var wnH = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

  var c = document.querySelectorAll('.section, .company-logo, .wrk-component, .img-container');

  // Loop through all elements array.
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
}; /* END: onScroll method */

//  Set onScroll to fire every 15ms.
setInterval(function() {
  if(s) {
    s = false;
  }
}, 15);
