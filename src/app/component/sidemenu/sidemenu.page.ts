import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from '../../Shared/Auth/auth.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {
  selectedPath: any = '';
  public appPages = [

    {
      title: 'Accueil',
      url: '/menu/home',
      icon: 'paper-plane'
    },
    {
      title: 'Messagerie ',
      url: '/menu/boite-reception',
      icon: 'heart'
    },
    {
      title: 'Maps',
      url: '/maps',
      icon: 'archive'
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: 'Close'
    },
    {
      icon: 'settings',
      title: 'ERP',
      url: '/erp'
    },
    {
      icon: 'person',
      title: 'Coach',
      url: '/coachprofile/coachphoto'
    },
    {
      icon: 'heart',
      title: 'Kids',
      url: '/sign-kids'
    }
  ];
  public Parametre = [{
    icon: 'settings',
    title: 'Paramétre',
    url: '/parametre'
  }, {
    icon: 'log-out',
    title: 'déconnexion',
    url: '/login'
  }];
  constructor(private router: Router,
    private authService: AuthService) {
    this.router.events.subscribe((event: RouterEvent) => {
      // console.log(event.url);

      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }
  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }
}
