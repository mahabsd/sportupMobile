import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private subject = new Subject<any>();
  constructor() { }


  
  sendMessage(eventTop: boolean) {
    this.subject.next({ event: eventTop });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
