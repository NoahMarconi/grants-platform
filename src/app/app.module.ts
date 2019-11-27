import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateNewGrantPageModule } from './create-new-grant/create-new-grant.module';
import { ViewGruntPageModule } from './view-grunt/view-grunt.module';
import { ViewGruntRequestRefundPageModule } from './view-grunt-request-refund/view-grunt-request-refund.module';
import { ViewGruntUnmarkAsCompletePageModule } from './view-grunt-unmark-as-complete/view-grunt-unmark-as-complete.module';
import { ViewGruntNotificationsPageModule } from './view-grunt-notifications/view-grunt-notifications.module';
import { AmountsReceivePageModule } from './amounts-receive/amounts-receive.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CreateNewGrantPageModule,
    ViewGruntPageModule,
    ViewGruntRequestRefundPageModule,
    ViewGruntUnmarkAsCompletePageModule,
    ViewGruntNotificationsPageModule,
    AmountsReceivePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
