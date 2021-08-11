import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarModalPage } from '../Planing/calendar-modal/calendar-modal.page';
import { CalendarComponent } from 'ionic2-calendar/calendar';
@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {
  calendar = {
    mode: 'month',
    locale:  'en-GB',
    currentDate: new Date(),
  };

  @ViewChild(CalendarModalPage) myCal: CalendarComponent;
  constructor() { }

  ngOnInit() {
  }

}
