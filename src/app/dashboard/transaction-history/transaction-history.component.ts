import { Component, OnInit } from '@angular/core';
import { PersistService } from 'src/core/services/persist.service';
import { SubSink } from 'subsink';
import { TransactionType } from 'src/shared/enums/transaction.enum';
import { TransactionItem } from 'src/shared/types/transactionItem.interface';

export interface TransactionHistory {
  profit: any,
  list: Array<TransactionItem>
}
@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  private subs = new SubSink();
  _transactionHistory:  TransactionHistory = {
    profit: 0.00,
    list: []
  };
  constructor(private persist: PersistService) { 
    this.subs.sink = this.persist.storageObservable.subscribe(
      (storageArray) => {
        this.transactionHistory = storageArray;
      }
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  set transactionHistory(list: Array<TransactionItem>) {
    this._transactionHistory = {
      profit: this.calculateProfit(list),
      list
    };
  }

  calculateProfit(list: Array<TransactionItem> ) {
    return list.reduce(
      (accumulator: any, { type, value }) => {
        return type === TransactionType.COMPRA ? accumulator - value : accumulator + value;
      },
      0.00
    )
  }

  get isNegativeProfit() {
    return this._transactionHistory.profit < 0.00;
  }

  get IsBalancedProfit() {
    return this._transactionHistory.profit === 0.00;
  }

  get isProfit() {
    return !this.isNegativeProfit && !this.IsBalancedProfit;
  }

  get getTotal(): any {
    return Math.abs(this._transactionHistory.profit);
  }
}
