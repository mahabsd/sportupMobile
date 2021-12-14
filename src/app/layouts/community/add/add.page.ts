import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/shared/Model/Activity';
import { CalendarService } from 'src/app/shared/Service/calendar.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Page } from '../../../shared/Model/page';
import { PageService } from '../../../shared/Service/page.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  evennement: any = false;
  selected: any;
  dropDown = false;
  private: boolean;
  public: boolean;
  page: Page = new Page();
  user: any;
  event: Activity = new Activity();
  constructor(private pageService: PageService,
    private userService: UserService,
    private calendarService: CalendarService) { }

  ngOnInit() {
    this.private = false;
    this.public = true;
    this.selected = 'Page';
    this.getMe();
  }

  openDropDown() {
    if (this.dropDown === false) {
      this.dropDown = true;
    }
    else if (this.dropDown === true) {
      this.dropDown = false;
    }
  }


  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.selected = ev.detail.value;
  }
  createPage(page) {
    this.page.createdBy = this.user._id
      this.pageService.addPage(page).subscribe(res => console.log(res));
  }
  getMe() {
    this.userService.getMe().subscribe(res => {
      this.user = res.data.data;
    });
  }
  createEvent(event){
    this.event.type = 'event';
    this.calendarService.addActivity(event).subscribe(async (res) => {
      console.log(res);});
  }
}
