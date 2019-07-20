import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatTooltipModule} from '@angular/material';
import {TabsModule} from 'ngx-bootstrap';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTooltipModule,
    TabsModule.forRoot(),
    ChartsModule
  ]
})
export class DashboardModule { }
