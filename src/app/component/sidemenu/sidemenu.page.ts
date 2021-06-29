import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'settings'
    },
    {
      title: 'Accueil',
      url: '/home',
      icon: 'paper-plane'
    },
    {
      title: 'Messagerie ',
      url: '/boite-reception',
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
      icon: 'heart',
      title: 'Kids',
      url: '/sign-kids'
    }
  ];
  public Parametre = [    {
    icon: 'settings',
    title: 'Paramétre',
    url: '/parametre'
  }, {
    icon: 'log-out',
    title: 'déconnexion',
    url: '/login'
  } ];
  constructor() { }

  ngOnInit() {
  }

}
