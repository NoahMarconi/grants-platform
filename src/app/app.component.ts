import { Component,OnInit } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {CreateNewGrantPage} from './create-new-grant/create-new-grant.page';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  public appPages = [
    {
      title: 'My Grants',
      url: '/my-grants',
      icon: 'gp-grant'
    },
    {
      title: 'Latest Grants',
      url: '/latest-grants',
      icon: 'gp-latest-grant'
    }, {
      title: 'Trending Grants',
      url: '/trending-grants',
      icon: 'gp-trending-grants'
    },
    {
      title: 'Transaction History',
      url: '/transaction-history',
      icon: 'gp-transaction-history'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalController : ModalController
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
  }

  async createNewGrant(){
    const modal = await this.modalController.create({
      component: CreateNewGrantPage,
      cssClass:'custom-modal-style',
      mode:"ios"
    })
    return await modal.present();

  }
}
