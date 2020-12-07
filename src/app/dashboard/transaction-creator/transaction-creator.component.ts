import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionType } from 'src/shared/enums/transaction.enum';

@Component({
  selector: 'app-transaction-creator',
  templateUrl: './transaction-creator.component.html',
  styleUrls: ['./transaction-creator.component.scss']
})
export class TransactionCreatorComponent implements OnInit {
  @Output()
  onTransactionAdded = new EventEmitter();

  emptyForm = {
    type: '0',
    name: '',
    value: ''
  };

  transactionForm: FormGroup;
  currency = {
    active: true,
    options: {
      prefix: 'R$ ',
      thousands: '.',
      decimal: ',',
      align: 'left'
    }
  };
  options = [
    {
      value: TransactionType.COMPRA,
      text: 'Compra',
      disabled: false
    },
    {
      value: TransactionType.VENDA,
      text: 'Venda',
      disabled: false
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.transactionForm = this.formBuilder.group(this.emptyForm);
  }

  ngOnInit(): void {
  }

  submitForm(e: any) {
    if ( this.transactionForm.value.name.length > 0 && this.transactionForm.value.value.length > 0) {
      this.onTransactionAdded.emit(this.transactionForm.value);
    }
    this.transactionForm.markAsPristine();
    this.transactionForm.markAsUntouched();
    this.transactionForm.reset(this.emptyForm);
  }
}
