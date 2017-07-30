import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var ham = document.getElementsByClassName('ham')[0];
    var navLnks = document.getElementsByClassName('nav')[0];
    var count = -350;
    var isOpen;
    var vpWidth = window.innerWidth;

    window.addEventListener('resize', function() {
      vpWidth = window.innerWidth;
    });

    ham.addEventListener('click', toggleNav);

    /* Method to control the navigation toggling. */

    function toggleNav(){
      if(!isOpen) {
        var openFn = setInterval(function() {
          if(vpWidth > 768) { // desktop
            if(count < 70) {
              openNavDesk(navLnks);
            } else {
              clearInterval(openFn);
            }
          } else {
            if(count < 55) {  // mobile
              openNavMob(navLnks);
            } else {
              clearInterval(openFn);
            }
          }
        }, 1);
        isOpen = true;
      } else {
        var closeFn = setInterval(function() {
          if(vpWidth > 768) { // desktop
            if(count > -300) {
              closeNavDesk(navLnks);
            } else {
              clearInterval(closeFn);
            }
          } else {
            if(count > -300) {  // mobile
              closeNavMob(navLnks);
            } else {
              clearInterval(closeFn);
            }
          }
        }, 1);
        isOpen = false;
      }
    }


    /* Method to close the navigation if a navigaion link is click. */

    var lis = document.querySelectorAll('.nav-items li');
    for(var i = 0; i < lis.length; i ++) {

        lis[i].addEventListener('click', function(){

          var closeNavFn = setInterval(function() {
            if(vpWidth > 768) { // desktop
              if(count > -300) {
                closeNavDesk(navLnks);
              } else {
                clearInterval(closeNavFn);
              }
            } else {
              if(count > -300) {  // mobile
                closeNavMob(navLnks);
              } else {
                clearInterval(closeNavFn);
              }
            }
          }, 1);
          isOpen = false;
        });
    }


    /* Helper functions */

    function openNavDesk(ele) {
      count += 15;
      ele.style.left = count + 'px';
      ele.style.height = '100%';
      ele.style.width = '300px';
      ele.style.top = '0px';
    }

    function closeNavDesk(ele) {
      count -= 15;
      ele.style.left = count + 'px';
    }

    function openNavMob(ele) {
      count += 15;
      ele.style.top = count + 'px';
      ele.style.width = '100%';
      ele.style.height = '300px';
      ele.style.left = '0px';
    }

    function closeNavMob(ele) {
      count -= 15;
      ele.style.top = count + 'px';
    }
  }

}
