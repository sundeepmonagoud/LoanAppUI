import { ActionReducerMap, MetaReducer, createSelector, State } from '@ngrx/store';
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
     totalBalance: number; 
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

  export function topUpBalanceReducer(state: number = 0, action: CustomerloanActions): number {
    switch (action.type) {
        case CustomerloanActionTypes.GetTopUpBalance:
          return action.payload ;
      default:
        return state;
    }
  }
export const reducers: ActionReducerMap<AppState> = {

     customerLoan: customerLoanReducer,
     totalBalance : topUpBalanceReducer
  };


export const selectCustomerLoans = (state: AppState) => state.customerLoan.customerLoanData;

export const selectTopUpBalance = (state: AppState) => state.totalBalance;


export const selectBalance = createSelector(
  (state: AppState ) => state,
  appstate => appstate.customerLoan.customerLoanData.reduce((subtotal, item) => subtotal + item.Balance,0)

);


export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];

