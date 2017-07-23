import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tcs',
  templateUrl: './tcs.component.html',
  styleUrls: ['./tcs.component.css']
})

export class TcsComponent implements OnInit {

  public height: Number;

  constructor() {}

  ngOnInit(){
    this.height = this.overlayContainer.nativeElement.offsetHeight;
    //console.log(this.height);
  }

  @ViewChild('overlayContainer')
  overlayContainer: ElementRef;
  @ViewChild('imgOverlay')
  imgOverlay: ElementRef;
}
