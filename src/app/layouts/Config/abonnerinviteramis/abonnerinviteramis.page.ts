import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/Shared/Service/user.service';
import { InvitemodalComponent } from '../invitemodal/invitemodal.component'
@Component({
  selector: 'app-abonnerinviteramis',
  templateUrl: './abonnerinviteramis.page.html',
  styleUrls: ['./abonnerinviteramis.page.scss'],
})
export class AbonnerinviteramisPage implements OnInit {
  user$;
  email: String;

  constructor( private userService: UserService, private modalController: ModalController) { }

  ngOnInit() {
  }

 

  async inviteEmail() {
    const modal = await this.modalController.create({
      component: InvitemodalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'invitebyText': true,
    
      }

    });
    return await modal.present();
  }

  getMe() {
    this.userService.getMe().subscribe(async res => {
      console.log(res.data.data);
      this.user$ = res.data.data;
    });
  }
}
