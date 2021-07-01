import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/Service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-inscription',
  templateUrl: './confirminscription.page.html',
  styleUrls: ['./confirminscription.page.scss'],
})
export class ConfirmInscriptionPage implements OnInit {
  code: string = '';
  constructor(
    private active: ActivatedRoute,
    public userService: UserService) { }
  ngOnInit() {
   
  }


  confirmer() {
    console.log(this.code);
    this.userService.confirmInscription(this.code).subscribe((response) => {
      console.log('hello user', response);
    }, err => {
      console.log(err);
    }
    );
  }

}
