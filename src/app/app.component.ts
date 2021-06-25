import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
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
    constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
