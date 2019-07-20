import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';
import {NavigationModule} from '../navigation/navigation.module';
import {ConfigurationModule} from '../configuration/configuration.module';
import {DashboardModule} from '../dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    DashboardModule,
    ConfigurationModule,
    LayoutRoutingModule,
  ]
})

export class LayoutModule {
}
