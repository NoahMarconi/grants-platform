import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrendingGrantsPage } from './trending-grants.page';

const routes: Routes = [
  {
    path: '',
    component: TrendingGrantsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrendingGrantsPage]
})
export class TrendingGrantsPageModule {}
