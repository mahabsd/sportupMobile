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
  dates: any = []
  datesTwo: any = []
  datesThree:any=[]
  user$;
  a
  months=["Jan","Fev","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
  apiImg = environment.apiImg + 'User/';
  constructor(private activityHistory: ActivityhistoryService, private userService: UserService) { }

  ngOnInit() {
    this.getMe();
    this.activityHistory.getHistory().subscribe((res) => {
      this.history = res;
      console.log(this.history);
      this.history.reverse()
      this.dates=[...new Set(this.history.map(item => item.dateCreated))]
      // console.log(this.dates);
      this.makeDates(this.dates)
    });
  }


  makeDates(dates) {
    dates.map(el => (
      this.a=new Date(el),
      this.a.getDate(),
      this.datesTwo.push(`${this.months[this.a.getMonth()]} ${this.a.getDate()}, ${this.a.getFullYear()}`),
      this.datesThree=[...new Set(this.datesTwo.map(item => item))]
    ))
    // console.log(this.datesThree);

  }


  getMe() {
    this.userService.getMe().subscribe(res => {
      this.user$ = res.data.data;
    });
  }


}
