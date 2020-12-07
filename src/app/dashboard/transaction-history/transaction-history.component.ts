import { Component, OnInit } from '@angular/core';
import { PersistService } from 'src/core/services/persist.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  storage;
  constructor(private persist: PersistService) { 
    this.storage = this.persist.storageObservable;
  }

  ngOnInit(): void {
  }

}
