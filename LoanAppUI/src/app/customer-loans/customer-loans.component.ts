import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectCustomerLoans } from '@app/reducers';
import { CustomerLoanData } from '@app/common/customer-loans.model';
import { Observable } from 'rxjs';
import { LoadCustomerloans } from '@app/actions/customerloan.actions';

@Component({
  selector: 'app-customer-loans',
  templateUrl: './customer-loans.component.html',
  styleUrls: ['./customer-loans.component.css']
})
export class CustomerLoansComponent implements OnInit {

  customerloans$: Observable<CustomerLoanData[]>;

  constructor(private store: Store<AppState>) {
    this.customerloans$ = this.store.pipe(select(selectCustomerLoans));
    
   
   }

  ngOnInit() {

  
  }


  getLoans(){
    var payload =  { customerLoanData:null};
    this.store.dispatch(new LoadCustomerloans(payload));
  }
}
