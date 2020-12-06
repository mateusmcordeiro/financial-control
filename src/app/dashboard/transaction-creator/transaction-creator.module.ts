import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionCreatorComponent } from './transaction-creator.component';
import { SharedModule } from 'src/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TransactionCreatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    TransactionCreatorComponent
  ]
})
export class TransactionCreatorModule { }
