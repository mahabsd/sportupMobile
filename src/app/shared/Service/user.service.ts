import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { map } from 'rxjs/operators';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private utilsService: UtilsService) { }
  getMe() {
    return this.utilsService.get(UtilsService.API_USER + 'Me').pipe(map(res => {
      console.log(res);
      return res.data.data;

    }));
  }
  signUp(user: User) {
    return this.utilsService.post(UtilsService.API_USER + 'signup', user).pipe(map(res => {
      return res;
    }))
  }
}
