import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/Auth/auth.service';

@Component({
  selector: 'app-coach-menu-pop-over',
  templateUrl: './coach-menu-pop-over.component.html',
  styleUrls: ['./coach-menu-pop-over.component.scss'],
})
export class CoachMenuPopOverComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  logout() {
    this.authService.logout();
  }

}
