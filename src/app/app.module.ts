import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ProfilService } from './layouts/profil/profil.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { AuthService } from './shared/Auth/auth.service';
import { LayoutsModule } from './layouts/layouts.module';
import { JWTInterceptor } from './shared/Interceptors/JWInterceptors';
import { H401Interceptor } from './shared/Interceptors/H401Interceptor';
import { AuthGuard } from './shared/Guard/auth.guard';
import { StorageService } from './shared/Service/storage.service';
import { ComponentModule } from './component/component.module';
import { LikesPipeModule } from './shared/Pipe/likesPipe.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../../../../../Web/sportUpWeb/src/environments/environment';
const config: SocketIoConfig = { url: 'http://localhost:4113', options: {} }
@NgModule({
  declarations: [AppComponent,],
  exports: [],
  entryComponents: [],
  imports: [
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
    }),
    AppRoutingModule,
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    LayoutsModule,
    ComponentModule,
    LikesPipeModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    ImagePicker,
    Crop,
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
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: H401Interceptor, multi: true },
    GoogleMaps
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
