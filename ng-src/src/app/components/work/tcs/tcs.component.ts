import { Component, OnInit, Directive, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-tcs',
  templateUrl: './tcs.component.html',
  styleUrls: ['./tcs.component.css']
})

@Directive({
  selector: '[bgImage]'
})
export class TcsComponent implements OnInit {

  constructor(

    public el: ElementRef,
    public renderer: Renderer

  ) {

  var height = this.el.nativeElement.style.height;
  console.log();

}

  ngOnInit(){

  }

}
