import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/app.gurd';
import {LayoutComponent} from './modules/layout/components/layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: '', component: LayoutComponent, children: [{
      path: '',
      loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule)
    }],
    canActivate: [AuthGuard]
  },
  {path: 'auth', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
