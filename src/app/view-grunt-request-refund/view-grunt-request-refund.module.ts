import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewGruntRequestRefundPage } from './view-grunt-request-refund.page';

const routes: Routes = [
  {
    path: '',
    component: ViewGruntRequestRefundPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewGruntRequestRefundPage]
})
export class ViewGruntRequestRefundPageModule {}
