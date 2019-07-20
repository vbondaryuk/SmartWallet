import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';
import {NavigationModule} from '../navigation/navigation.module';
import {ConfigurationModule} from '../configuration/configuration.module';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    ConfigurationModule,
    LayoutRoutingModule,
  ]
})

export class LayoutModule {
}
