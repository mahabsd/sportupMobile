import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, PopoverController } from '@ionic/angular';
import { CalendarService } from 'src/app/shared/Service/calendar.service';
import { EventService } from 'src/app/shared/Service/event.service';
import { async } from '@angular/core/testing';
import { UserService } from 'src/app/Shared/Service/user.service';
import { CameraSource } from '@capacitor/core';
import { ImageService } from 'src/app/Shared/Service/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.page.html',
  styleUrls: ['./show-event.page.scss'],
})
export class ShowEventPage implements OnInit {
  interrested: boolean;
  isScrollTop: boolean;
  dropDown: boolean;
  id= this.activatedRoute.snapshot.params.id;
  event: any;
  userid: any;
  apiImg = environment.apiImg + 'Activity/';

  constructor(public popoverController: PopoverController,
  private eventService: EventService,
  private activatedRoute: ActivatedRoute,
  private calendarService: CalendarService,
  private elemRef: ElementRef,
  private userservice: UserService,
  private imageService: ImageService,
  private action: ActionSheetController,
  ) { }
  @HostListener('click', ['$event.target'])
  onClickOutside(targetElement) {
    const target = this.elemRef.nativeElement.querySelector('div');
    if (targetElement.tagName === target.tagName) {
      this.dropDown= false;
    }
  }
  ngOnInit() {
    this.dropDown=false;
    this.getMe();
    this.getOneEvent();
  }
  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.userid = res.data.data._id;
    });
  }
  interest() {
    this.interrested = true;
  }

  notinterested() {
    this.interrested = false;
  }

  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;
    } else {
      this.isScrollTop = true;;
    }
    this.eventService.sendMessage(this.isScrollTop);
  }
  openDropDown() {
    if(this.dropDown===false){
      this.dropDown=true;
    }
    else if(this.dropDown===true){
      this.dropDown=false;
    }
  }
  getOneEvent() {
    this.calendarService.getEventbyID(this.id).subscribe(async res=> {
       this.event = await res[0];
       console.log( this.event );

      });
  }
  async addImage(source: CameraSource) {
    const fd = new FormData();
    await this.imageService.readyImage(source, fd);

    this.getFormData(this.event, fd);
    console.log(this.event);

    this.calendarService.updateCoverEvent(fd).subscribe(async (res) => {
      await this.getOneEvent();
     });
  }
  async selectImageSource() {
    const buttons = [
      {
        text: 'Choose from gallery',
        icon: 'image',
        handler: () => {
          this.addImage(CameraSource.Photos);
        },
      },
    ];

    const actionSheet = await this.action.create({
      header: 'Select from phone',
      buttons,
    });

    await actionSheet.present();
  }
  getFormData(object, formdata: FormData) {

    Object.keys(object).forEach((key) => formdata.append(key, object[key]));


  }
}
