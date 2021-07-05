import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    // const storage = await this.storage.create();
    // this._storage = storage;

  }

  // Create and expose methods that users of this service can
  // call, for example:
  public async set(key, value) {
    console.log(key, value);

    await this.storage.set(key, value).then(() => console.log('ok')).catch((error) => console.log(error)

    )



  }
  public async get(key) {
    console.log(key);



    return await this.storage.get(key).then(async (res) => {
      console.log(res);
      return await res
    }).catch((error) => {
      console.log(error);

    })



  }
  public clear() {
    this._storage?.clear();
  }
  public remove(key: string) {
    this._storage?.remove(key);
  }
}