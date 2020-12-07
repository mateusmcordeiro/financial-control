import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';
import { InputComponent } from './components/input/input.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { CurrencyPipe } from './pipes/currency.pipe';
import { TransactionTypeSignPipe } from './pipes/transaction-type-sign.pipe';



@NgModule({
  declarations: [
    SelectComponent,
    InputComponent,
    CurrencyPipe,
    TransactionTypeSignPipe
  ],
  imports: [
    CommonModule,
    NgxCurrencyModule

  ],
  exports:[
    SelectComponent,
    InputComponent,
    CurrencyPipe,
    TransactionTypeSignPipe
  ]
})
export class SharedModule { }
