import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './components/layout/layout.component';
import {NavigationModule} from '../navigation/navigation.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    LayoutRoutingModule
  ]
})

export class LayoutModule { }
