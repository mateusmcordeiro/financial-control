import { Pipe, PipeTransform } from '@angular/core';
import { TransactionType } from '../enums/transaction.enum';

@Pipe({
  name: 'transactionTypeSign'
})
export class TransactionTypeSignPipe implements PipeTransform {

  transform(value: TransactionType): unknown {
    return value === 0 ? '-' : '+';
  }

}
