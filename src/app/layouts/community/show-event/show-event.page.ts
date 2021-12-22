import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CalendarService } from 'src/app/shared/Service/calendar.service';
import { EventService } from 'src/app/shared/Service/event.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.page.html',
  styleUrls: ['./show-event.page.scss'],
})
export class ShowEventPage implements OnInit {
  interrested: boolean;
  isScrollTop: boolean;
  dropDown: boolean;
  id= this.activatedRoute.snapshot.params.id;
  event: any;

  constructor(public popoverController: PopoverController,
  private eventService: EventService,
  private activatedRoute: ActivatedRoute,
  private calendarService: CalendarService,
  private elemRef: ElementRef) { }
  @HostListener('click', ['$event.target'])
  onClickOutside(targetElement) {
    const target = this.elemRef.nativeElement.querySelector('div');
    if (targetElement.tagName === target.tagName) {
      this.dropDown= false;
    }
  }
  ngOnInit() {
    this.getOneEvent();
    this.dropDown=false;
  }

  interest() {
    this.interrested = true;
  }

  notinterested() {
    this.interrested = false;
  }

  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;
    } else {
      this.isScrollTop = true;;
    }
    this.eventService.sendMessage(this.isScrollTop);
  }
  openDropDown() {
    if(this.dropDown===false){
      this.dropDown=true;
    }
    else if(this.dropDown===true){
      this.dropDown=false;
    }
  }
  getOneEvent() {
    this.calendarService.getEventbyID(this.id).subscribe(async res=> {
       this.event = await res[0];
      });
  }

}
