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
    var count = 75;
    var isOpen;
    var vpWidth = window.innerWidth;

    window.addEventListener('resize', function() {
      vpWidth = window.innerWidth;
    });

    ham.addEventListener('click', toggleNav);

    function toggleNav(){
      if(!isOpen) {
        var openFn = setInterval(function() {
          if(vpWidth > 768) {
            if(count !== 200) {
              openNavDesk(navLnks);
            } else {
              clearInterval(openFn);
            }
          } else {
            if(count !== 200) {
              openNavMob(navLnks);
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
            } else {
              clearInterval(closeFn);
            }
          } else {
            if(count > 50) {
              closeNavMob(navLnks);
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
      ele.style.height = '100%';
      ele.style.width = count + 'px';
    }

    function closeNavDesk(ele) {
      count --;
      ele.style.width = count + 'px';
    }

    function openNavMob(ele) {
      count ++;
      ele.style.height = count + 'px';
      ele.style.width = '100%';
    }

    function closeNavMob(ele) {
      count --;
      ele.style.height = count + 'px';
    }
  }

}
