import { Component, OnInit } from '@angular/core';
import { ActivityhistoryService } from 'src/app/shared/Service/activityhistory.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-historiquepersonnel',
  templateUrl: './historiquepersonnel.page.html',
  styleUrls: ['./historiquepersonnel.page.scss'],
})
export class HistoriquepersonnelPage implements OnInit {
  history;
  user$;
  apiImg = environment.apiImg + 'User/';
  constructor(private activityHistory: ActivityhistoryService, private userService: UserService) { }

  ngOnInit() {
    this.getMe();
    this.activityHistory.getHistory().subscribe((res) => {
      this.history = res;
    });
  }

  getMe() {
    this.userService.getMe().subscribe(res => {
      this.user$ = res.data.data;
    });
  }


}
