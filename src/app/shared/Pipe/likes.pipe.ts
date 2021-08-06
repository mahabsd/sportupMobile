import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../Model/Post';

@Pipe({
  name: 'likes'
})
export class LikesPipe implements PipeTransform {

  transform(value: Post[], args?: any): Post[] {
    // console.log(value);

    return value;


  }

}
