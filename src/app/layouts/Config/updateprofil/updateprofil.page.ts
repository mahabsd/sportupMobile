import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/Service/user.service';

@Component({
  selector: 'app-updateprofil',
  templateUrl: './updateprofil.page.html',
  styleUrls: ['./updateprofil.page.scss'],
})
export class UpdateprofilPage implements OnInit {
  user$: any = [];
  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.getMe();
  }

  modifierPhotoProfile() {
    console.log('modifierPhotoProfile');

  }
  envoyer() {
    console.log('envoyer');
  }


  getMe() {
    this.userService.getMe().subscribe(async res => {
      this.user$ = await res.data.data;

    });
  }
}
