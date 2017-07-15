/* =========================================
*   FILE:   SCROLL.JS
*   AUTHOR: Zaine Kingi
*   VER:    1.0
*   DESC:   Main application file for all
*           element scrolling functionality
*           including fade-in-out, scrolling
*           and element shifting.
*           ................................
*                      CHANGE LOG
*           --------------------------------
*           VER:   DATE:   CHANGES:
*           --------------------------------
*           1.0    15-7-17 Initial release.
* ---------------------------------------- */

/*  window.onscroll = function() {
    var elem = document.getElementById('logo'),
        c = elem.children;

    // Loop through all the logos.
    for (var i = 0; i < c.length; i++) {

      // Hide all image elements.
      c[i].classList.add('opacity-0');

      // Get the image elements offset top position.
      var vpOffset = c[i].getBoundingClientRect();

      // Check the parent containers offset top position.
      if (vpOffset.top < 500) {

        // Show the element
        c[i].classList.remove('opacity-0');

        // Fade element in.
        c[i].classList.add('fade-in');
      }
    }
  }; /!* END: window onscroll method *!/*/
