import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConfigurationRoutingModule} from './configuration-routing.module';
import {ConfigurationComponent} from './components/configuration/configuration.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatTreeModule, MatIconModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';
import {CategoryTreeviewComponent} from './components/category.treeview/category.treeview.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [ConfigurationComponent, CategoryTreeviewComponent],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    SharedModule,
    MatTreeModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class ConfigurationModule {
}
