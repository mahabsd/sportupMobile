import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { observeOn } from 'rxjs/operators';
import { User } from '../Model/User';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<User>{

  constructor(private userService: UserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
    let Users: User[] = [];
    // this.UserService.getAllUsers().subscribe(async res => {
    //   Users = await res;
    //   console.log(res);

    // });
    const observable: Observable<User[]> = Observable.create(observer => {
      console.log(Users);

      observer.next(Users);
      observer.complete();
    })
    return this.userService.getMe();

  }
}
