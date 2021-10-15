import { Favoris } from './../Model/favoris';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilsService } from './utils.service';
import { Post } from '../Model/Post';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  constructor(private apiService: UtilsService) { }
  addFavoris(post: Post): Observable<Favoris> {
    return this.apiService.patch(`${UtilsService.apiPost}${post}/favoris`, null).pipe(map((res) => res));
  }
  getFavorisByService(post): Observable<Favoris[]> {
    return this.apiService.get(`${UtilsService.apiPost}${post}/Favoris`).pipe(map((res) => res.data.data));
  }
  getSavedPosts(page, id): Observable<[]> {
    return this.apiService.get(`${UtilsService.apiFavoris}?page=${page}&limit=5&user=${id}`).pipe(((res) => res));
  }

  updateFavoriss(Favoris: Favoris) {

    return this.apiService.patch(`${UtilsService.apiFavoris}${Favoris.id}`, Favoris);
  }

  deleteFavoris(id: any) {
    return this.apiService.delete(`${UtilsService.apiFavoris}`);
  }
}
