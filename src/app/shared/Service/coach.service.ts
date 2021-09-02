import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coach } from '../Model/coach';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private apiService: UtilsService) { }
  addCoach(coach: Coach): Observable<Coach> {
    return this.apiService.post(`${UtilsService.apiCoach}`, coach).pipe(map((res) => res));
  }
  getCoach(id): Observable<Coach[]> {
    return this.apiService.get(`${UtilsService.apiCoach}${id}`).pipe(map((res) => res.data.data));
  }


  updateCoachs(coach: Coach) {

    return this.apiService.patch(`${UtilsService.apiCoach}${coach.id}`, coach);
  }

  deleteCoach(id: any) {
    return this.apiService.delete(`${UtilsService.apiCoach}` + id);
  }
}


