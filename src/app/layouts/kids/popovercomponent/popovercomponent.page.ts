import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Shared/Auth/auth.service';

@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  dismissPopover()
  {
      this.authService.logout();
  }
}
