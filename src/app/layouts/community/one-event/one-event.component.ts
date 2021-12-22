import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-event',
  templateUrl: './one-event.component.html',
  styleUrls: ['./one-event.component.scss'],
})
export class OneEventComponent implements OnInit {
  @Input() event: any;
  interrested;
  dropDown: boolean;
  constructor(private elemRef: ElementRef) { }
    @HostListener('click', ['$event.target'])
    onClickOutside(targetElement) {
      const target = this.elemRef.nativeElement.querySelector('div');
      if (targetElement.tagName === target.tagName) {
        this.dropDown= false;
      }
    }
  ngOnInit() {
    this.dropDown=false;
  }
  interest() {
    this.interrested = true;
  }
  notinterested() {
    this.interrested = false;
  }
  openDropDown() {
    if(this.dropDown===false){
      this.dropDown=true;
    }
    else if(this.dropDown===true){
      this.dropDown=false;
    }
  }
}
