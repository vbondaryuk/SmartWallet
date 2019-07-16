import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/app.gurd';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard]},
  {path: 'auth', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
