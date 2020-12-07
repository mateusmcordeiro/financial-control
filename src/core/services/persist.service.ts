import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TransactionItem } from 'src/shared/types/transactionItem.interface';

@Injectable({
  providedIn: 'root'
})
export class PersistService {

  private storage = new BehaviorSubject(this.loadDataFromStorage());

  storageObservable = this.storage.asObservable();

  private data: Array<TransactionItem> = [];

  constructor() { 
    this.storageObservable.subscribe((storage) => {
      this.data = storage;
      localStorage.setItem('financialControl', JSON.stringify(this.data));
    })
  }


  private loadDataFromStorage() {
    if ('financialControl' in localStorage) {
      const savedDataStringified = localStorage.getItem('financialControl');
      const dataParsed = JSON.parse(savedDataStringified === null ? '[]': savedDataStringified);
      return dataParsed;
    }
    return [];
  }

  updateStorage(item: TransactionItem) {
    const newStorage = this.data.concat(item);
    this.storage.next(newStorage);
  }

}
