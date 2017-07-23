/* ================================================
*   FILE:   MAIN.JS
*   AUTHOR: Zaine Kingi
*   VER:    1.0
*   DATE:   23-7-17
*   DESC:   Main JavaScript file for reusable
*           JavaScript methods for the application.
*           .......................................
*                       CHANGE LOG
*           ---------------------------------------
*           VER:    DATE:   CHANGES:
*           ---------------------------------------
*           1.0     23-7-17 Initial release.
*  ----------------------------------------------- */

/* ------------------------------------------------
    METHOD: SETHEIGHT
    DESC:   Dynamically set the height of the overlay
            element based on its parent container.
    INPUT:  NULL
    OUTPUT: The height of the parent element.
   --------------------------------------------- */
function setHeight() {
  // Get all the overlay elements.
  var ov = document.querySelectorAll('.overlay');
  var par;

  // Iterate through all overlay elements.
  for(var i = 0; i < ov.length; i ++) {

    // Get the overlay elements parent container.
    par = ov[i].parentNode;

    // Get the parent containers height.
    return ov[i].style.height = par.computedStyle.height;

  }

  console.log(ov);

}
