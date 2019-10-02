import { Component, OnInit } from '@angular/core';
import { CustomerLoanData } from '@app/common/customer-loans.model';
import { Observable } from 'rxjs';
import { AppState, selectCustomerLoans, selectBalance, selectTopUpBalance } from '@app/reducers';
import { Store, select } from '@ngrx/store';
import { reduce, map } from 'rxjs/operators';

@Component({
  selector: 'app-topup-info',
  templateUrl: './topup-info.component.html',
  styleUrls: ['./topup-info.component.css']
})
export class TopupInfoComponent implements OnInit {
  customerloans$: Observable<CustomerLoanData[]> = this.store.pipe(select(selectCustomerLoans));
  noOfLoans: number;
  disableApplyLoanBtn :boolean = false;
  totalBalacne$ : Observable<number>;

  constructor(private store: Store<AppState>) {
    this.totalBalacne$ = this.store.pipe(select(selectTopUpBalance));
   }

  ngOnInit() {
    this.customerloans$  = this.store.pipe(select(selectCustomerLoans));
    this.customerloans$.subscribe( cl => {
       if(cl){
        this.noOfLoans = cl.length;
        if(this.noOfLoans >= 3) {
            this.disableApplyLoanBtn = true;
        }
       }
    });
  }

  applyForLoan(){

    if(this.disableApplyLoanBtn) return;

  }

  ngOnDestroy() {
    this.customerloans$.subscribe();
  }

}
