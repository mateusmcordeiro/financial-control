import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistService {

  private storage = new BehaviorSubject(this.loadDataFromStorage());

  storageObservable = this.storage.asObservable();

  private data: Array<any> = [];

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

  updateStorage(item: any) {
    const newStorage = this.data.concat(item);
    this.storage.next(newStorage);
  }


}
