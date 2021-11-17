import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Shared/Service/user.service';

@Component({
  selector: 'app-pop-over-suivre-page',
  templateUrl: './pop-over-suivre-page.component.html',
  styleUrls: ['./pop-over-suivre-page.component.scss'],
})
export class PopOverSuivrePageComponent implements OnInit {
  @Input() idpassed: string;
  user$;
  constructor(private router: Router,private userService:UserService) { }
  dismissPopover(msg)
  {
      console.log(msg);
  }
  ngOnInit() {
  }
  wochat(){
  this.userService.getUser(this.idpassed).subscribe(
    (response) => {
      this.user$ = response.data.data;
      if (response.data.data.role==='user'||response.data.data.role==='pro') {
        this.router.navigate(["chat", this.idpassed]);
      }
        else if (response.data.data.role==='kids') {
          this.router.navigate(["chatkids", this.idpassed]);
      }
    },
    (error) => {
      console.error(error);
    }
  );


}


}
