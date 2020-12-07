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
  ]
  constructor(private formBuilder: FormBuilder) {
    this.transactionForm = this.formBuilder.group({
      type: '0',
      name: '',
      value: ''
    });
  }

  ngOnInit(): void {
  }

  teste(e: any) {
    console.log(e);
  }

  submitForm(e: any) {
    this.onTransactionAdded.emit(this.transactionForm.value);
    this.transactionForm.reset();
  }
}
