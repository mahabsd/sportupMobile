import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private apiService: UtilsService) { }

  getAllNotifications(id): Observable<any> {
    return this.apiService.get(`${UtilsService.apiNotif}${id}`).pipe(((res) => res));
  }

}
