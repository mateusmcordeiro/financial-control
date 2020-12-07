import { Component, OnInit } from '@angular/core';
import { PersistService } from 'src/core/services/persist.service';
import { TransactionType } from 'src/shared/enums/transaction.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private persist: PersistService) { }

  ngOnInit(): void {
  }

  transactionAddedTrigger(e: any) {
    const formatValue = (value: string) => {
      const removedFormatting = value.replace(/\D/g, '');
      const matchComma = value.match(/(\d)(,\d{2})/g);
      const commaOrString = matchComma !== null? matchComma[0]: ''
      return removedFormatting.substring(0, removedFormatting.length - 3 ) + (commaOrString as string).replace(',','.');
    }
    const item  = {
      value: parseFloat(formatValue(e.value)),
      type: (parseInt(e.type) as TransactionType),
      name: e.name
    }
    this.persist.updateStorage(item);
  }

}
