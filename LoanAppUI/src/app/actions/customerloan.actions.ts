import { Action } from '@ngrx/store';
import { CustomerLoanData } from '@app/common/customer-loans.model';

export enum CustomerloanActionTypes {
  LoadCustomerloans = '[Customerloan] Load Customerloans',
  LoadCustomerloansDone = '[Customerloan] Load Customerloans Done',
  GetTopUpBalance = '[Customerloan] Get Topup Balance',
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


export class GetTopUpBalance implements Action {
  readonly type = CustomerloanActionTypes.GetTopUpBalance;

  constructor(readonly payload: number) {

  }
}

export type CustomerloanActions = LoadCustomerloans | LoadCustomerloansDone | GetTopUpBalance;
