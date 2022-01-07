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
      .get(`${UtilsService.apiPage}/getAll/?createdBy=${id}`)
      .pipe(map((res) => res.data.data));
  }
  addPage(Page): Observable<Page> {
    return this.apiService
      .post(`${UtilsService.apiPage}`, Page)
      .pipe(map((res) => res));
  }

  updatepage(page) {
    return this.apiService.put(`${UtilsService.apiPage}/${page._id}`, page);
  }

  deletepage(id: any) {
    return this.apiService.delete(`${UtilsService.apiPage}` + id);
  }
  getOnePage(id): Observable<Page[]> {
    return this.apiService
      .get(`${UtilsService.apiPage}/getAll/?_id=${id}`)
      .pipe(map((res) => res.data.data));
  }
  getAllPages(): Observable<Page[]> {
    return this.apiService
      .get(`${UtilsService.apiPage}/getAll`)
      .pipe(map((res) => res));
  }
  updateCoverPage(page){
    return this.apiService.patch(`${UtilsService.apiPage}` +  '/cover', page);
  }
  updateProfileImagePage(page){
    return this.apiService.patch(`${UtilsService.apiPage}/imageProfile` , page);
  }
}

