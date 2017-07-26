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
    METHOD: SLIDER
    DESC:   Image slider method.
    INPUT:  ID of parent container of the images.
    OUTPUT: NULL
   --------------------------------------------- */
var ele;
var imgs;
var imageWidth;
var imageNumber;
var currentImage = 0;

function init(){

  ele = document.getElementById('slider');
  imgs = ele.children;
  imageNumber = imgs.length;
  imageWidth = imgs[0].getBoundingClientRect().width; console.log(imageWidth);
  // set ele width as the total height of all images in image slider.
  ele.style.width = parseInt(imageWidth * imageNumber + imageWidth) + 'px';
  slider(ele);
}

function slider(e){
  animate({
    delay:200,
    duration: 3000,
    delta:function(p){return Math.max(0, -1 + 2 * p)},
    step:function(delta){
      e.style.left = '-' + parseInt(currentImage * imageWidth + delta * imageWidth) + 'px';
    },
    callback:function(){
      currentImage++;
      // if it doesn’t slide to the last image, keep sliding
      if(currentImage < imageNumber-1){
        slider(e);
      }
      // if current image it’s the last one, it slides back to the first one
      else{
        var leftPosition = (imageNumber - 1) * imageWidth;
        // after 2 seconds, call the goBack function to slide to the first image
        setTimeout(function(){goBack(leftPosition)},1000);
        setTimeout(function(){slider(e)}, 1000);
      }
    }
  });
}

function goBack(leftPosition){
  currentImage = 0;
  var id = setInterval(function(){
    if(leftPosition >= 0){
      ele.style.left = '-' + parseInt(leftPosition) + 'px';
      leftPosition -= imageWidth / 10;
    }
    else{
      clearInterval(id);
    }
  }, 17);
}

function animate(opts){
  var start = new Date;
  var id = setInterval(function(){
    var timePassed = new Date - start;
    var progress = timePassed / opts.duration;
    if(progress > 1){
      progress = 1;
    }
    var delta = opts.delta(progress);
    opts.step(delta);
    if (progress == 1){
      clearInterval(id);
      opts.callback();
    }
  }, opts.dalay || 20);
}
window.onload = init;

/* =============== END: Slider Method ============ */
