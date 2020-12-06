import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionType } from 'src/shared/enums/transaction.enum';

@Component({
  selector: 'app-transaction-creator',
  templateUrl: './transaction-creator.component.html',
  styleUrls: ['./transaction-creator.component.scss']
})
export class TransactionCreatorComponent implements OnInit {
  transactionForm: FormGroup;
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
      type: 0,
      name: '',
      value: ''
    });

  }

  ngOnInit(): void {
  }

}
