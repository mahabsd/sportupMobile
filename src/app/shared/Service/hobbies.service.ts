import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {


  constructor(private apiService: UtilsService) { }
  addHobby(hobby: any): Observable<any> {
    return this.apiService.patch(`${UtilsService.apiHobbies}`, hobby).pipe(((res) => res));
  }
  getHobbies(): Observable<[]> {
    return this.apiService.get(`${UtilsService.apiHobbies}`).pipe(((res) => res));
  }

  findbyactivity(hobby: any): Observable<[]> {
    return this.apiService.get(`${UtilsService.apiUSER}?activity=${hobby}`).pipe(((res) => res));
  }
}
