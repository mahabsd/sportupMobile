import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/Auth/auth.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
})
export class ParametrePage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }
}
