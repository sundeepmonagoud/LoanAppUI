import { Component } from '@angular/core';
import { CustomerLoanService } from '@services/customer-loan-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'LoanAppUI';

  constructor(public custLoanService : CustomerLoanService){

  }

  ngOnInit(){
    // this.custLoanService.getCustomerLoans().subscribe(
    //   success => {
    //     console.log(success);
    //   }
    // );
  }

}
