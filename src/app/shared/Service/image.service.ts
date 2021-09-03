import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { ImageModel } from '../Model/ImageModel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private apiService: UtilsService) { }
  addImage(image: ImageModel): Observable<ImageModel> {
    return this.apiService.post(`${UtilsService.apiImage}`, image).pipe(map((res) => res));
  }
  getAllImages(): Observable<ImageModel[]> {
    return this.apiService.get(`${UtilsService.apiImage}`).pipe(map((res) => res.data.data));
  }
  getImage(id): Observable<ImageModel[]> {
    return this.apiService.get(`${UtilsService.apiImage}${id}`).pipe(map((res) => res.data.data));
  }
  getImageByUserId(id): Observable<ImageModel[]> {
    return this.apiService.get(`${UtilsService.apiImage}?createdBy=${id}`).pipe(map((res) => res.data.data));
  }


  updateImage(image: ImageModel) {

    return this.apiService.patch(`${UtilsService.apiImage}${image._id}`, image);
  }

  deleteimage(id: any) {
    return this.apiService.delete(`${UtilsService.apiImage}` + id);
  }
}
