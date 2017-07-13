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
    // var content = document.getElementsByClassName('main-container');
    // var navIcons = document.getElementsByClassName('navbar-icon');
    var count = 75;
    var rot = 90;
    var isOpen;
    var vpWidth = window.innerWidth;

    ham.addEventListener('click', toggleNav);

    function toggleNav(){
      if(!isOpen) {
        var openFn = setInterval(function() {
          if(vpWidth > 768) {
            if(count !== 200) {
              openNavDesk(navLnks);
              //closeNavIcon();
            } else {
              clearInterval(openFn);
            }
          } else {
            if(count !== 200) {
              openNavMob(navLnks);
              // closeNavicon();
            } else {
              clearInterval(openFn);
            }
          }
        }, .1);
        isOpen = true;
      } else {
        var closeFn = setInterval(function() {
          if(vpWidth > 768) {
            if(count > 75) {
              closeNavDesk(navLnks);
              //openNavIcon();
            } else {
              clearInterval(closeFn);
            }
          } else {
            if(count > 50) {
              closeNavMob(navLnks);
              // openNavIcon();
            } else {
              clearInterval(closeFn);
            }
          }
        }, .1);
        isOpen = false;
      }
    }


    function openNavDesk(ele) {
      count ++;
      ele.style.width = count + 'px';
    }

    function closeNavDesk(ele) {
      count --;
      ele.style.width = count + 'px';
    }

    function openNavMob(ele) {
      count ++;
      ele.style.height = count + 'px';
    }

    function closeNavMob(ele) {
      count --;
      ele.style.height = count + 'px';
    }

    /*function closeNavIcon() {
      if(rot === 135) {
        clearInterval(closeNavIcon);
      } else {
        rot ++;
      }
      navIcons[0].style.transformOrigin = '5px center';
      navIcons[1].style.transformOrigin = 'center 4px';
      navIcons[0].style.transform = 'rotate(' + rot + 'deg)';
      navIcons[1].style.transform = 'rotate(' + -rot + 'deg)';
    }*/

    /*function openNavIcon() {
      if(rot === 90) {
        clearInterval(openNavIcon);
      } else {
        navIcons[0].style.transform = 'rotate(' + -rot + 'deg)';
        navIcons[1].style.transform = 'rotate(' + rot + 'deg)';
      }
    }*/

  }

}
