import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { SharedModule } from 'src/shared/shared.module';
import { TransactionCreatorModule } from './transaction-creator/transaction-creator.module';



@NgModule({
  declarations: [DashboardComponent,TransactionHistoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransactionCreatorModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
