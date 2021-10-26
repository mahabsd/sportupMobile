import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Access } from '../Model/Access';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class AccesshistoryService {
 
  constructor(private apiService: UtilsService) { }

 

  getHistory(): Observable<any> {
    return this.apiService
      .get(`${UtilsService.apimyaccesshistory}`)
      .pipe(map((res) => res.data.data));
  }
 
  deleteHistory() {
    return this.apiService.delete(`${UtilsService.apimyaccesshistory}`);
  }
}
