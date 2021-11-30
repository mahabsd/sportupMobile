import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GetIpsService {

  constructor(private apiService: UtilsService) { }

  getIps(): Observable<any> {
    return this.apiService.get(`${UtilsService.apiIp}`).pipe(map((res) => res));
  }
}
