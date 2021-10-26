import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { ImageModel } from '../Model/ImageModel';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private subject = new Subject<any>();
  private images: any = [];
  constructor(private apiService: UtilsService) {}

  // add image and save it in formdata
  async readyImage(source: CameraSource, fd: FormData) {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source,
    });
    console.log('image', image);
    const blobData = this.b64toBlob(
      image.base64String,
      `image/${image.format}`
    );
    const imageName = 'Give me a name';
    fd.append('photo', blobData, imageName);
  }

  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  sendMessage(message: string) {
    this.subject.next({ event: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  addImage(image): Observable<ImageModel> {
    return this.apiService
      .post(`${UtilsService.apiImage}`, image)
      .pipe(map((res) => res));
  }
  getAllImages(): Observable<ImageModel[]> {
    return this.apiService
      .get(`${UtilsService.apiImage}`)
      .pipe(map((res) => res.data.data));
  }
  getImage(id): Observable<ImageModel[]> {
    return this.apiService
      .get(`${UtilsService.apiImage}${id}`)
      .pipe(map((res) => res.data.data));
  }
  getImageByUserId(id): Observable<ImageModel[]> {
    return this.apiService
      .get(`${UtilsService.apiImage}?createdBy=${id}`)
      .pipe(map((res) => res.data.data));
  }

  updateImage(image: ImageModel) {
    return this.apiService.patch(`${UtilsService.apiImage}${image._id}`, image);
  }

  deleteimage(id: any) {
    return this.apiService.delete(`${UtilsService.apiImage}` + id);
  }

  getImageBypost(idpost): Observable<any[]> {
    return this.apiService
      .get(`${UtilsService.apimediafile}MediaByPost/${idpost}`)
      .pipe(map((res) => res.data.data));
  }

  GetPostStatusOnly(idpost): Observable<any[]> {
    return this.apiService
      .get(`${UtilsService.apimediafile}GetPosts/StatusOnly/${idpost}`)
      .pipe(map((res) => res.data.data));
  }
}
