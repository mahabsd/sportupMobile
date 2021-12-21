import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Activity } from '../Model/Activity';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private subject = new Subject<any>();
  constructor(private apiService: UtilsService) { }

  sendEvent(evt) {
    this.subject.next({ event: evt });
  }

  getEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  getActivitiesbyID(id): Observable<Activity[]> {
    return this.apiService
      .get(`${UtilsService.apiCalendar}`)
      .pipe(map((res) => res.data.data));
  }
  getEventsbyID(id): Observable<Activity[]> {
    return this.apiService
      .get(`${UtilsService.apiCalendar}?createdBy=${id}&type='event'`)
      .pipe(map((res) => res.data.data));
  }
  getAllEvents(): Observable<Activity[]> {
    let event = 'event';
    return this.apiService
      .get(`${UtilsService.apiCalendar}?type=${event}`)
      .pipe(map((res) => res.data.data));
  }
  addActivity(activity): Observable<Activity> {
    return this.apiService
      .post(`${UtilsService.apiCalendar}`, activity)
      .pipe(map((res) => res));
  }

  updateEvent(event) {
    return this.apiService.patch(`${UtilsService.apiCalendar}${event._id}`, event);
  }

  deleteEvent(id: any) {
    return this.apiService.delete(`${UtilsService.apiCalendar}` + id);
  }
  getEventbyID(id): Observable<Activity[]> {
    return this.apiService
      .get(`${UtilsService.apiCalendar}${id}`)
      .pipe(map((res) => res.data.data));
  }
}
