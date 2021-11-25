import { Component, OnInit } from '@angular/core';
import { InviteService } from 'src/app/shared/Service/invite.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  sujet;
  email;
  name;
  message;
  constructor(private inviteService: InviteService) { }
  sendMail()
  {
      this.inviteService.sendContact({email: this.email,name: this.name, message: this.message, sujet: this.sujet}).subscribe(async res => {

      });
  }
  ngOnInit() {
  }

}
