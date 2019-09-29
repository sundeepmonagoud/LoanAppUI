import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@app/reducers';
import { CustomerLoanService } from '@app/services/customer-loan-service';
import { LoadCustomerloans, CustomerloanActionTypes } from '@app/actions/customerloan.actions';
import { CustomerLoanData } from '@app/common/customer-loans.model';


@Injectable()
export class CustomerLoanEffects {

    constructor(private actions$: Actions, private store: Store<AppState>, public customerLoanService: CustomerLoanService) { }

   @Effect()
   loadCustomerLoan$ =   this.actions$
   .pipe(
       ofType<LoadCustomerloans>(CustomerloanActionTypes.LoadCustomerloans),
       mergeMap((action) => this.customerLoanService.getCustomerLoans()
       .pipe (
           map(customerLoan => {
               return (new LoadCustomerloans( { customerLoanData : customerLoan}));
           }),
           catchError((errorMessage) => (errorMessage))
       ))
   );

}