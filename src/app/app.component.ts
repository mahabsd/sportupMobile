import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from './Shared/Auth/auth.service';
import { StorageService } from './Shared/Service/storage.service';
import { environment } from 'src/environments/environment';

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
      url: '/boitereception',
      icon: 'heart'
    },
    {
      title: 'Maps',
      url: '/maps',
      icon: 'archive'
    },
    {
      title: 'Hobbies',
      url: '/tabs/hobbies',
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
      url: '/login-erp'
    },
    {
      icon: 'heart',
      title: 'Kids',
      url: '/sign-kids'
    }
  ];
  public parametre = [{
    icon: 'settings',
    title: 'Paramétre',
    url: '/parametre'
  }, {
    icon: 'log-out',
    title: 'déconnexion',
    url: '/login'
  }];
  token: any;

  constructor(private router: Router,
    private storage: StorageService,
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
    this.platform.ready().then(() => {

      this.storage.get(environment.token).subscribe(res => {
        this.token = res;
        // console.log(this.token);
        return this.token;
      });
    });

  }



  logout() {
    this.authService.logout();
  }
}
