import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewGruntUnmarkAsCompletePage } from './view-grunt-unmark-as-complete.page';

const routes: Routes = [
  {
    path: '',
    component: ViewGruntUnmarkAsCompletePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewGruntUnmarkAsCompletePage]
})
export class ViewGruntUnmarkAsCompletePageModule {}
