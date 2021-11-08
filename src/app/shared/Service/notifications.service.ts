import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private apiService: UtilsService) { }

  getAllNotifications(id): Observable<any> {
    return this.apiService.get(`${UtilsService.apiNotif}${id}`).pipe(map((res) => res.data.data));
  }
  postNotification(notif): Observable<any> {
    return this.apiService.patch(`${UtilsService.apiNotif}`, notif).pipe(map((res) => res.data.data));
  }

}
