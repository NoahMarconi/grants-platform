import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-grunt-notifications',
  templateUrl: './view-grunt-notifications.page.html',
  styleUrls: ['./view-grunt-notifications.page.scss'],
})
export class ViewGruntNotificationsPage implements OnInit {

  constructor(public modalCtrl : ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss()
  }

}
