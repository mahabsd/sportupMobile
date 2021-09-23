import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ActiviteKidService {

  constructor(private apiService: UtilsService) { }
  addActivity(activite): Observable<any> {
    return this.apiService.post(`${UtilsService.apiacitivteKids}`, activite).pipe(((res) => res));
  }

  updateActivitys(activite) {

    return this.apiService.patch(`${UtilsService.apiacitivteKids}`, activite);
  }

  deleteActivity(id: any) {
    return this.apiService.delete(`${UtilsService.apiacitivteKids}` + id);
  }
  getAll(activite): Observable<any> {
    return this.apiService.get(`${UtilsService.apiacitivteKids}?activite=${activite}`).pipe(((res) => res));
  }

}
