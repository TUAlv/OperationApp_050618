import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login'
import { RestProvider } from '../providers/rest/rest';
import { HttpModule } from '@angular/http';
import {HomePage } from '../pages/home/home';
import { TabsTuPage } from '../pages/tabs-tu/tabs-tu'
import { ModalAddUsuarioPruebaPage } from '../pages/modal-add-usuario-prueba/modal-add-usuario-prueba'
import { AutoLogoutService } from '../pages/tabs-tu/logoutSession'
import "rxjs/add/operator/map";
import { ChannelService, ChannelConfig, SignalrWindow } from "../providers/channel-service/channel-service";
import { LocalNotifications } from "@ionic-native/local-notifications";

//let channelConfig = new ChannelConfig();  
//channelConfig.url = "http://10.103.197.150:8082/signalr/hubs";  
//channelConfig.hubName = "EventHub";

let channelConfig = new ChannelConfig();  
//channelConfig.url = "http://localhost:8499/signalr";
channelConfig.url = "https://www.transunionauto.com.mx:8001/TUAUTO/TU.PushNotifications.Client.Web/signalr";
channelConfig.hubName = "PushNotificationsToMobile";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    TabsTuPage,
    ModalAddUsuarioPruebaPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    TabsTuPage,
    ModalAddUsuarioPruebaPage
    
  ],
  providers: [
    
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    AutoLogoutService,
    LocalNotifications,
    ChannelService,    
    { provide: SignalrWindow, useValue: window },
    { provide: 'channel.config', useValue: channelConfig }    
  ]
})

export class AppModule {}
