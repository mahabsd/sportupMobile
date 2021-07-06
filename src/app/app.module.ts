import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ProfilService } from './layouts/profil/profil.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { LoginKidsService } from './layouts/kids/sign-kids/login-kids.service';
import { AuthService } from './shared/Auth/auth.service';
import { LayoutsModule } from './layouts/layouts.module';
import { JWTInterceptor } from './shared/Interceptors/JWInterceptors';
import { H401Interceptor } from './shared/Interceptors/H401Interceptor';
import { AuthGuard } from './shared/Guard/auth.guard';
import { StorageService } from './shared/Service/storage.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    LayoutsModule,


  ],
  providers: [
    ImagePicker,
    Crop,
    LoginKidsService,
    ProfilService,
    AuthService,
    StorageService,
    AuthGuard,
    StatusBar,
    SplashScreen,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    { provide: HTTP_INTERCEPTORS, useClass: H401Interceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    GoogleMaps
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
