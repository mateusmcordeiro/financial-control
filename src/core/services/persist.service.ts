import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistService {

  private storage = new BehaviorSubject(this.loadDataFromStorage());

  storageSubject = this.storage.asObservable();

  private data: Array<any> = [];

  constructor() { 
    this.storageSubject.subscribe((storage) => {
      this.data = storage;
      localStorage.setItem('financialControl', JSON.stringify(this.data));
      console.log(this.data);
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
    const itemFormatted = {
      type: item.type,
      name: item.name,
      value: item.value.length > 0 ? item.value.replace(/\D/g,''): ''
    }
    const newStorage = this.data.concat(itemFormatted);
    this.storage.next(newStorage);
  }


}
