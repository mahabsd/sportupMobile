import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { observeOn } from 'rxjs/operators';
import { Post } from '../Model/Post';
import { User } from '../Model/User';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolverService implements Resolve<Post[]>{

  constructor(private postService: PostService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post[] | Observable<Post[]> | Promise<Post[]> {
    let posts:Post[]=[];
    // this.postService.getAllPosts().subscribe(async res => {
    //   posts = await res;
    //   console.log(res);

    // });
    const observable: Observable<Post[]> = Observable.create(observer => {
      observer.next(posts);
      observer.complete();
    })
    return this.postService.getAllPosts();

  }
}
