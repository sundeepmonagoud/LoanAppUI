import { Component, OnInit } from '@angular/core';
import { CustomerLoanData } from '@app/common/customer-loans.model';
import { Observable } from 'rxjs';
import { AppState, selectCustomerLoans } from '@app/reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-topup-info',
  templateUrl: './topup-info.component.html',
  styleUrls: ['./topup-info.component.css']
})
export class TopupInfoComponent implements OnInit {
  customerloans$: Observable<CustomerLoanData[]>;

  availableBalace: number;
  noOfLoans:  number;

  constructor(private store: Store<AppState>) {
    this.customerloans$ = this.store.pipe(select(selectCustomerLoans));
    
    this.customerloans$.subscribe( cl => {

      if(cl){
        for(let el of cl){

          if(el.IsSelected){
            this.availableBalace = this.availableBalace + el.Balance;
            this.noOfLoans = this.noOfLoans + 1;
          }

        }
      }

    });

   }

  ngOnInit() {
  }

}
