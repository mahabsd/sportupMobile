import { UtilsService } from './utils.service';
import { Injectable } from '@angular/core';
import { Comment } from '../Model/Comment';
import { map } from 'rxjs/operators';
import { Follow } from '../Model/Follow';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private apiService: UtilsService) { }

  getChat(idsender, idreceiver) {
    return this.apiService.get(`${UtilsService.apiChat}${idsender}/${idreceiver}`).pipe(map((res) => res.data.data));

  }
  getAllChatsByuser(idConnectedUser) {
    return this.apiService.get(`${UtilsService.apiChat}${idConnectedUser}}`).pipe(map((res) => res.data.data));

  }

}


