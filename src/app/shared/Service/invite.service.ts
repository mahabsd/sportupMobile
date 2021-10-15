import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class InviteService {


  constructor(private apiService: UtilsService) { }
  sendMail(user): Observable<any> {
    return this.apiService.post(`${UtilsService.apiInvite}sendmail`, user).pipe(map((res) => res));
  }
  sendText(phone): Observable<any> {
    return this.apiService.post(`${UtilsService.apiInvite}sendtext`, phone).pipe(map((res) => res));
  }

}
