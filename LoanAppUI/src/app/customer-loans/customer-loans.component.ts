import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectCustomerLoans } from '@app/reducers';
import { CustomerLoanData } from '@app/common/customer-loans.model';
import { Observable } from 'rxjs';
import { LoadCustomerloans, GetTopUpBalance } from '@app/actions/customerloan.actions';
import { reduce, map } from 'rxjs/operators';

@Component({
  selector: 'app-customer-loans',
  templateUrl: './customer-loans.component.html',
  styleUrls: ['./customer-loans.component.css']
})
export class CustomerLoansComponent implements OnInit {

  customerloans$: Observable<CustomerLoanData[]>;
  totalBalance: number = 0; 

  constructor(private store: Store<AppState>) {
    this.customerloans$ = this.store.pipe(select(selectCustomerLoans));
    
   
   }

  ngOnInit() {

    this.getLoans();
  
  }

  updateChange(balance:  number, isSelected: boolean){

    if(isSelected)
      this.totalBalance = this.totalBalance +  balance;
    else
      this.totalBalance = this.totalBalance - balance;


    // this.customerloans$.pipe(map((custloan)=> {
    //     for(let cl of custloan){
    //       if(cl.IsSelected)
    //         this.totalBalance = this.totalBalance + cl.Balance;
    //     }
    // }));

    this.store.dispatch(new GetTopUpBalance(this.totalBalance));
  }

  getLoans(){
    var payload =  { customerLoanData:null};
    this.store.dispatch(new LoadCustomerloans({ customerLoanData:null}));
  }
}
