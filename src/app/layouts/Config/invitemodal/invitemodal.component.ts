import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InviteService } from 'src/app/shared/Service/invite.service';

@Component({
  selector: 'app-invitemodal',
  templateUrl: './invitemodal.component.html',
  styleUrls: ['./invitemodal.component.css']
})
export class InvitemodalComponent implements OnInit {


  email;
  tel;
  constructor(private modalController: ModalController, private inviteService: InviteService) { }

  ngOnInit() {
  }


  sendMail()
  {
      this.inviteService.sendMail({email: this.email, name:''}).subscribe(async res => {
        console.log(res);
 
      });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }

}
