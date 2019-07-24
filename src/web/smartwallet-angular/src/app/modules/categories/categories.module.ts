import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesExpensesProgressComponent } from './components/categories-expenses-progress/categories-expenses-progress.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {MatIconModule, MatTableModule, MatTooltipModule, MatTreeModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProgressbarModule} from 'ngx-bootstrap';


@NgModule({
  declarations: [CategoriesExpensesProgressComponent, CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatTreeModule,
    MatIconModule,
    FlexLayoutModule,
    MatTooltipModule,
    ProgressbarModule.forRoot(),
    MatTableModule,
  ]
})
export class CategoriesModule { }
