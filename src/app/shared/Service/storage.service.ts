import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {

  }

  public set(key, value): Observable<any> {
    return from(this.storage.set(key, value));
  }
  public get(key: string): Observable<any> {
    return from(this.storage.get(key));
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
