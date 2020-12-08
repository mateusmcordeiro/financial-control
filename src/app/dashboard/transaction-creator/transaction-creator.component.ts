import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionType } from 'src/shared/enums/transaction.enum';

@Component({
  selector: 'app-transaction-creator',
  templateUrl: './transaction-creator.component.html',
  styleUrls: ['./transaction-creator.component.scss']
})
export class TransactionCreatorComponent implements OnInit {
  @Output()
  onTransactionAdded = new EventEmitter();
  submitted = false;
  transactionForm: FormGroup;
  currency = {
    active: true
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
    this.transactionForm = this.formBuilder.group({
      type: [
        '0', 
        Validators.required
      ],
      name: [
        '', 
        Validators.required
      ],
      value: [
        '', 
        Validators.required
      ]
    });
  }

  ngOnInit(): void {
    
  }

  get f() { return this.transactionForm.controls; }

  submitForm(e: any) {
    if ( this.transactionForm.invalid) {
      this.submitted = true;
      return;
    }
    this.submitted = false;
    this.onTransactionAdded.emit(this.transactionForm.value);
  }
}
