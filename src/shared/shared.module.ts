import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';
import { InputComponent } from './components/input/input.component';
import { NgxCurrencyModule } from 'ngx-currency';



@NgModule({
  declarations: [
    SelectComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    NgxCurrencyModule

  ],
  exports:[
    SelectComponent,
    InputComponent
  ]
})
export class SharedModule { }
