import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TopMenuComponent } from 'src/app/layouts/erp/top-menu/top-menu.component';
import { PopoverController } from '@ionic/angular';
import { CoachMenuPopOverComponent } from  'src/app/layouts/coachprofile/coach-menu-pop-over/coach-menu-pop-over.component';
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
  @Input() isCoach: boolean = false;
  @Input() isPalmares: boolean = false;
  
  constructor(private modalCtrl: ModalController,public popoverController: PopoverController) { }

  ngOnInit() { }
  close() {
    this.modalCtrl.dismiss();
  }

 
  async openCoachMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: CoachMenuPopOverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      mode:'ios'
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
}
