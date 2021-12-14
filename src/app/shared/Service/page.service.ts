import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';
import { map } from 'rxjs/operators';
import { Page } from '../Model/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private apiService: UtilsService) { }
  getpagesbyID(id): Observable<Page[]> {
    return this.apiService
      .get(`${UtilsService.apiPage}`)
      .pipe(map((res) => res.data.data));
  }
  addPage(Page): Observable<Page> {
    return this.apiService
      .post(`${UtilsService.apiPage}`, Page)
      .pipe(map((res) => res));
  }

  updatepage(page) {
    return this.apiService.patch(`${UtilsService.apiPage}${page._id}`, page);
  }

  deletepage(id: any) {
    return this.apiService.delete(`${UtilsService.apiPage}` + id);
  }
}

