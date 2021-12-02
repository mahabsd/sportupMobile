import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/Service/user.service';

@Component({
  selector: 'app-confidentialite',
  templateUrl: './confidentialite.page.html',
  styleUrls: ['./confidentialite.page.scss'],
})
export class ConfidentialitePage implements OnInit {
  isParam: boolean;
  user: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getMe();
  }
  getMe() {
    this.userService.getMe().subscribe(async res => {
      this.user = await res.data.data;
      console.log(this.user);
    });
  }
}
