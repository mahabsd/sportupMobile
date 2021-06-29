import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SigninService } from './Oauth/signin/signin.service';
import { HttpClientModule  } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ProfilService } from './profil/profil.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { LoginKidsService } from './kids/sign-kids/login-kids.service';
import { AuthService } from './shared/Auth/auth.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    HttpClientModule,


  ],
  providers: [
    ImagePicker,
    Crop,
    SigninService,
    LoginKidsService,
    ProfilService,
    AuthService,
    StatusBar,
    SplashScreen,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    GoogleMaps
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
