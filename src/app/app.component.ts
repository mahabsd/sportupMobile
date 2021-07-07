import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController, IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from './shared/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  

selectedPath: any = '';
public appPages = [
  
  {
    title: 'Accueil',
    url: '/tabs/home',
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
    private storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  private authService: AuthService) {
    this.initializeApp();
  this.router.events.subscribe((event: RouterEvent) => {
    // console.log(event.url);

    if (event && event.url) {
      this.selectedPath = event.url;
    }
  });
}
 

  initializeApp() {
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 async ngOnInit() {
  
  }


  
  logout() {
    this.authService.logout();
  }
}
