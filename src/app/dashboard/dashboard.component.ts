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
      const removedFormatting = value.replace(/[,]+/g,"");
      return parseFloat(removedFormatting)
    }
    const item  = {
      value: formatValue(e.value),
      type: (parseInt(e.type) as TransactionType),
      name: e.name
    }
    this.persist.updateStorage(item);
  }

}
