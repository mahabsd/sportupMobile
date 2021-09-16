import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterChat'
})
export class FilterChatPipe implements PipeTransform {

  transform(value: any,filterString:string) {
    if(value.length===0||filterString===''){
      return value;
    }
    const messages=[];
    for(const message of value){
      if(message['msg'].includes(filterString)){
        messages.push(message);
      console.log(messages)
      }

    }

 return messages;


  }

}