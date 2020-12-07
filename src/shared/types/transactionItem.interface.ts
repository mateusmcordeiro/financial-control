import { TransactionType } from "../enums/transaction.enum";

export interface TransactionItem {
  type: TransactionType,
  name: string,
  value: number
}