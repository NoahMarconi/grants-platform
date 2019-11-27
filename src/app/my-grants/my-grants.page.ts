import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { ViewGruntPage } from '../view-grunt/view-grunt.page';
import { ViewGruntRequestRefundPage } from '../view-grunt-request-refund/view-grunt-request-refund.page';
import { ViewGruntUnmarkAsCompletePage } from '../view-grunt-unmark-as-complete/view-grunt-unmark-as-complete.page';
import { ViewGruntNotificationsPage } from '../view-grunt-notifications/view-grunt-notifications.page';
import { AmountsReceivePage } from '../amounts-receive/amounts-receive.page';

@Component({
  selector: 'app-my-grants',
  templateUrl: './my-grants.page.html',
  styleUrls: ['./my-grants.page.scss'],
})
export class MyGrantsPage implements OnInit {

  constructor( public popoverCtrl: PopoverController, public modalController : ModalController) { }

   async userMenuPopover($event){
     const popover = await this.popoverCtrl.create({
       component: MenuPopoverComponent,
       event: event,
      translucent: true,
      cssClass:'poopover-user-option'
     })

     return await popover.present();
   }

   async viewGrunt(){
    const modal = await this.modalController.create({
      component: ViewGruntPage,
      cssClass:'custom-modal-style',
      mode:"ios"
    })
    return await modal.present();
  }
  async viewGruntRequestRefund(){
    const modal = await this.modalController.create({
      component: ViewGruntRequestRefundPage,
      cssClass:'custom-modal-style',
      mode:"ios"
    })
    return await modal.present();
  }

  async viewGruntUnmarkAsComplete(){
    const modal = await this.modalController.create({
      component: ViewGruntUnmarkAsCompletePage,
      cssClass:'custom-modal-style',
      mode:"ios"
    })
    return await modal.present();
  }
  async viewGruntNotifications(){
    const modal = await this.modalController.create({
      component: ViewGruntNotificationsPage,
      cssClass:'custom-modal-style notification',
      mode:"ios"
    })
    return await modal.present();
  }
  async amountsReceive(){
    const modal = await this.modalController.create({
      component: AmountsReceivePage,
      cssClass:'custom-modal-style',
      mode:"ios"
    })
    return await modal.present();
  }

   created =[
    {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      cost:"1,500",
      totalCost:"5,000", 
      imgs :["avatar-02", "avatar-03", "avatar-04"]
     }, {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      cost:"1,500",
      totalCost:"5,000", 
      imgs :["avatar-02", "avatar-03"]
     }, {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      cost:"1,500",
      totalCost:"5,000", 
      imgs :["avatar-02", "avatar-03", "avatar-04"]
     }
   ]
   funded =[
    {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      cost:"1,500",
      totalCost:"5,000", 
      imgs :["avatar-02"]
     }
   ]
   managed =[
    {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      cost:"1,500",
      totalCost:"5,000", 
      imgs :["avatar-02", "avatar-03"]
     }, {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      cost:"1,500",
      totalCost:"5,000", 
      imgs :["avatar-02"]
     }
   ]

  ngOnInit() {
  }

}
