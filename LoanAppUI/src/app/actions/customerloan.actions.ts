import { Action } from '@ngrx/store';
import { CustomerLoanData } from '@app/common/customer-loans.model';

export enum CustomerloanActionTypes {
  LoadCustomerloans = '[Customerloan] Load Customerloans',
  LoadCustomerloansDone = '[Customerloan] Load Customerloans Done',
  CustomerloansTopup = '[Customerloan] Customerloans Topup',
}

export class LoadCustomerloans implements Action {
  readonly type = CustomerloanActionTypes.LoadCustomerloans;

  constructor(readonly payload: {customerLoanData: CustomerLoanData[]}) {

  }
}

export class LoadCustomerloansDone implements Action {
  readonly type = CustomerloanActionTypes.LoadCustomerloansDone;

  constructor(readonly payload: {customerLoanData: CustomerLoanData[]}) {

  }
}


export class CustomerloansTopup implements Action {
  readonly type = CustomerloanActionTypes.CustomerloansTopup;

  constructor(readonly payload: {customerLoanData: CustomerLoanData[]}) {

  }
}

export type CustomerloanActions = LoadCustomerloans | LoadCustomerloansDone | CustomerloansTopup;
