import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Observable, from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public storage$ = new BehaviorSubject(null);
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
  }

  
  public set(key, value): Observable<any> {
    console.log(this.storage$.next(value));

    this.storage$.next(value);
    return from(this.storage.set(key, value));
  }
  public get(key: string): Observable<any> {
    return from(this.storage.get(key).then(res => res));

  }
  public get2(key: string): Promise<any> {

    console.log(this.storage$.getValue());
    return new Promise((resolve) => {

      this.storage.get(key).then(res => resolve(res));
    });


  }
  public clear(): Observable<any> {
    return from(this.storage.clear());
  }
  public remove(key: string): Observable<any> {
    return from(this.storage.remove(key));
  }
  public keys(): Observable<Array<string>> {
    return from(this.storage.keys());
  }
}
