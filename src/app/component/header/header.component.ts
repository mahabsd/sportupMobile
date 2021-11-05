import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TopMenuComponent } from 'src/app/layouts/erp/top-menu/top-menu.component';
import { PopoverController } from '@ionic/angular';
import { CoachMenuPopOverComponent } from 'src/app/layouts/coachprofile/coach-menu-pop-over/coach-menu-pop-over.component';
import { PalmaresPopOverComponent } from 'src/app/layouts/coachprofile/palmares-pop-over/palmares-pop-over.component';
import { Location } from "@angular/common";
import { UserService } from 'src/app/Shared/Service/user.service';
import { FollowerService } from 'src/app/shared/Service/follower.service';
import { ShowImagePage } from '../modal/show-image/show-image.page';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() color: 'primary';
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() isModal: boolean = false;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() isDetails: boolean = false;
  @Input() isEllipsis: boolean = false;
  @Input() isOption: boolean = false;
  @Input() isOptionPageSuivre: boolean = false;

  @Input() isCoach: boolean = false;
  @Input() isPalmares: boolean = false;
  @Input() isModProfile: boolean = false;
  @Input() BoiteRecepetionKids: boolean = false;

  @Input() BoiteRecepetion: boolean = false;
  @Input() ChatAdulte: boolean = false;

  @Input() isNotifications: boolean = false;
  @Input() isKid: boolean = false;

  @Input() isKidPlanning: boolean = false;
  @Input() KidsProfile: boolean = false;
  @Input() SuivrePage: boolean = false;
  @Input() isParam: boolean = false;
  @Input() inParam: boolean = false;
  @Input() AdulteProfile: boolean = false;
  @Input() CoachProfileNotConnectedUser: boolean = false;
  @Input() ChatKids: boolean = false;

  @Input()  type: string;
  @Input()  idprofillepassed: string;
  @Input()  followid: string;

  userid: any;
  user$: any;

  iduser1;
  follower = false;
  constructor(private modalCtrl: ModalController,
    public popoverController: PopoverController,
    private location: Location,
    private userservice: UserService,
  ) { }

  ngOnInit() {
    this.getMe()
    console.log("popver"+this.idprofillepassed);
   // this.getfollow();
  }
  close() {
    this.modalCtrl.dismiss();
  }

  BackButtonPalmares(){
    this.location.back();
  }
  async openCoachMenu(ev: any) {

    const popover = await this.popoverController.create({
      component: CoachMenuPopOverComponent,
      cssClass: 'pop-over-style',
      componentProps: {Etatfollow: this.type,IdprofilePassed: this.idprofillepassed,followid:this.followid},

      event: ev,
      translucent: true,
      mode: 'ios'
    });
    if(this.type==='followed'){
    popover.style.cssText = '--max-height:100px;--max-width:200px;';
    }
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async openCoachPalmares(ev: any) {
    const popover = await this.popoverController.create({
      component: PalmaresPopOverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      mode: 'ios'
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async openERPModal() {
    const modal = await this.modalCtrl.create({
      component: TopMenuComponent,
      cssClass: 'erp-parametre-modal'
    });
    return await modal.present();
  }
  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.user$ = res.data.data;
      this.userid= res.data.data._id;
    });
}

async openSearch() {
  const modal = await this.modalCtrl.create({
    component: ShowImagePage,
    cssClass: ''
  });
  return await modal.present();
}


}


