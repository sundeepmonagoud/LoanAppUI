import { Action } from '@ngrx/store';
import { CustomerLoanData } from '@app/common/customer-loans.model';

export enum CustomerloanActionTypes {
  LoadCustomerloans = '[Customerloan] Load Customerloans',
}

export class LoadCustomerloans implements Action {
  readonly type = CustomerloanActionTypes.LoadCustomerloans;

  constructor(readonly payload: {customerLoanData: CustomerLoanData[]}) {

  }
}


export type CustomerloanActions = LoadCustomerloans;
