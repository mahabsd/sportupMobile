import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Activity } from '../Model/Activity';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private apiService: UtilsService) { }


  

  getActivitiesbyID(id): Observable<Activity[]> {
    return this.apiService
      .get(`${UtilsService.apiCalendar}`)
      .pipe(map((res) => res.data.data));
  }
  addActivity(activity): Observable<Activity> {
    return this.apiService
      .post(`${UtilsService.apiCalendar}`, activity)
      .pipe(map((res) => res));
  }
}
