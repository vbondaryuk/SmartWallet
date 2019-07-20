import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfigurationComponent} from './components/configuration/configuration.component';


const routes: Routes = [
  {path: 'wallet-settings', component: ConfigurationComponent, pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
