import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'wallet-settings',
    loadChildren: () => import('src/app/modules/configuration/configuration.module').then(m => m.ConfigurationModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('src/app/modules/categories/categories.module').then(m => m.CategoriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}

