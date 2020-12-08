import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';
import { InputComponent } from './components/input/input.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { TransactionTypeSignPipe } from './pipes/transaction-type-sign.pipe';
import { CurrencyMaskDirective } from './directives/currency-mask.directive';



@NgModule({
  declarations: [
    SelectComponent,
    InputComponent,
    CurrencyPipe,
    TransactionTypeSignPipe,
    CurrencyMaskDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SelectComponent,
    InputComponent,
    CurrencyPipe,
    TransactionTypeSignPipe,
    CurrencyMaskDirective
  ]
})
export class SharedModule { }
