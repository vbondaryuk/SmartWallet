import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'wallet-settings',
    loadChildren: () => import('src/app/modules/configuration/configuration-routing.module').then(m => m.ConfigurationRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}

