import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CustomerLoanData } from '@app/common/customer-loans.model';
import { LoadCustomerloans, CustomerloanActionTypes, LoadCustomerloansDone, CustomerloanActions } from '@app/actions/customerloan.actions';
import { environment } from 'environments/environment';

export interface CustomerLoanState {
    customerLoanData: CustomerLoanData[]| null;
  }
  
  const initialCustomerLoanState: CustomerLoanState = {
    customerLoanData: null
  };


export interface AppState {
     customerLoan: CustomerLoanState;
  }


  export function customerLoanReducer(state: CustomerLoanState = initialCustomerLoanState, action: CustomerloanActions): CustomerLoanState {
    switch (action.type) {
      case CustomerloanActionTypes.LoadCustomerloans:
        return {
          customerLoanData: action.payload.customerLoanData
        };
        case CustomerloanActionTypes.LoadCustomerloansDone:
            return {
              customerLoanData: action.payload.customerLoanData
            };
      default:
        return state;
    }
  }

export const reducers: ActionReducerMap<AppState> = {

     customerLoan: customerLoanReducer
  };


export const selectCustomerLoans = (state: AppState) => state.customerLoan.customerLoanData;

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];

