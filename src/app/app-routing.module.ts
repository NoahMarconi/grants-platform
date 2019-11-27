import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'my-grants', loadChildren: './my-grants/my-grants.module#MyGrantsPageModule' },
  { path: 'latest-grants', loadChildren: './latest-grants/latest-grants.module#LatestGrantsPageModule' },
  { path: 'trending-grants', loadChildren: './trending-grants/trending-grants.module#TrendingGrantsPageModule' },
  { path: 'transaction-history', loadChildren: './transaction-history/transaction-history.module#TransactionHistoryPageModule' },
  { path: 'create-new-grant', loadChildren: './create-new-grant/create-new-grant.module#CreateNewGrantPageModule' },
  { path: 'view-grunt', loadChildren: './view-grunt/view-grunt.module#ViewGruntPageModule' },
  { path: 'view-grunt-request-refund', loadChildren: './view-grunt-request-refund/view-grunt-request-refund.module#ViewGruntRequestRefundPageModule' },
  { path: 'view-grunt-unmark-as-complete', loadChildren: './view-grunt-unmark-as-complete/view-grunt-unmark-as-complete.module#ViewGruntUnmarkAsCompletePageModule' },
  { path: 'view-grunt-notifications', loadChildren: './view-grunt-notifications/view-grunt-notifications.module#ViewGruntNotificationsPageModule' },
  { path: 'amounts-receive', loadChildren: './amounts-receive/amounts-receive.module#AmountsReceivePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
