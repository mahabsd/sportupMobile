import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/Auth/auth.service';
import { UserService } from 'src/app/Shared/Service/user.service';
@Component({
  selector: 'app-desactivermoncompte',
  templateUrl: './desactivermoncompte.page.html',
  styleUrls: ['./desactivermoncompte.page.scss'],
})
export class DesactivermoncomptePage implements OnInit {
  passwd;
  reason;
  constructor(private userService: UserService, private authService: AuthService,private router: Router) { }

  ngOnInit() {


  }


  deact(){
    const form = {password:this.passwd, reason: this.reason}
    console.log(form);
    this.userService.deactivate(form).subscribe(res => {
      this.authService.logout();
      this.router.navigate(['/login']);
    });
  }

}
