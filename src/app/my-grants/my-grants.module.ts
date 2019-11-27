import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MenuPopoverComponent} from '../menu-popover/menu-popover.component';

import { IonicModule } from '@ionic/angular';

import { MyGrantsPage } from './my-grants.page';

const routes: Routes = [
  {
    path: '',
    component: MyGrantsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [MenuPopoverComponent],
  declarations: [MyGrantsPage, MenuPopoverComponent]
})
export class MyGrantsPageModule {}
