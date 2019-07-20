import { NgModule } from '@angular/core';
import {InputRegexDirective} from './directives/input-regex.directive';



@NgModule({
  declarations: [InputRegexDirective],
  exports: [
    InputRegexDirective
  ]
})
export class SharedModule { }
