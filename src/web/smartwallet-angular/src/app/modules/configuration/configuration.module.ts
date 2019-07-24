import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConfigurationRoutingModule} from './configuration-routing.module';
import {ConfigurationComponent} from './components/configuration/configuration.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatTreeModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';
import {CategoryTreeViewComponent} from './components/category.treeview/category.treeview.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CategoriesModule} from '../categories/categories.module';


@NgModule({
  declarations: [ConfigurationComponent, CategoryTreeViewComponent],
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
    FlexLayoutModule,
    MatTooltipModule,
    CategoriesModule
  ]
})
export class ConfigurationModule {
}
