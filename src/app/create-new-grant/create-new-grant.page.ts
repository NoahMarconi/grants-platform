import {  Component,  OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-new-grant',
  templateUrl: './create-new-grant.page.html',
  styleUrls: ['./create-new-grant.page.scss'],
})
export class CreateNewGrantPage implements OnInit {

  constructor(public modalCtrl : ModalController) {}

  ngOnInit() {}

  private selectedLink: string = "singleDeliveryDate";
  setradio(e: string): void {
    this.selectedLink = e;
  }

  dismiss(){
    this.modalCtrl.dismiss()
  }

  isSelected(name: string): boolean {
    if (!this.selectedLink) { 
      return false;
    }
    return (this.selectedLink === name); 
  }
}