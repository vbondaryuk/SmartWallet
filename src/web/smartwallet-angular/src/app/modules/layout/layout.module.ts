import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './components/layout/layout.component';
import {NavigationModule} from '../navigation/navigation.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MatTooltipModule} from '@angular/material';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    LayoutRoutingModule,
    MatTooltipModule,
    TabsModule.forRoot(),
    ChartsModule
  ]
})

export class LayoutModule {
}
