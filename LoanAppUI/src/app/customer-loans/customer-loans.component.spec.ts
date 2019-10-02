// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { CustomerLoansComponent } from './customer-loans.component';
// import { TopupInfoComponent } from './topup-info/topup-info.component';
// import { LoanDetailsComponent } from './loan-details/loan-details.component';
// import { Store } from '@ngrx/store';
// import { of } from 'rxjs';
// import { FormsModule } from '@angular/forms';

// import { CustomerloanActions } from '../actions/customerloan.actions'
// import { CustomerLoanData } from '@app/common/customer-loans.model';

// describe('CustomerLoansComponent', () => {
//   let component: CustomerLoansComponent;
//   let fixture: ComponentFixture<CustomerLoansComponent>;

//   let custLoanData: CustomerLoanData[] = [];

//   let custloan =  new CustomerLoanData();
   
//   custloan.LoanId  = 1;
//   custloan.LoanNumber= 4567389987;
//   custloan.Name= "Personal Loan 1";
//   custloan.Balance= 1800.00;
//   custloan.Interest= 200.00;
//   custloan.EarlyRePaymentFee= 100.00;
//   custloan.PayoutAmount= 2100.00;
//   custloan.IsSelected=  false;
  
//   custLoanData.push(custloan);

//   custloan = new CustomerLoanData();
//   custloan.LoanId  = 2;
//   custloan.LoanNumber= 4567282937;
//   custloan.Name= "Personal Loan 2";
//   custloan.Balance= 1500.00;
//   custloan.Interest= 100.00;
//   custloan.EarlyRePaymentFee= 50.00;
//   custloan.PayoutAmount= 1650.00;
//   custloan.IsSelected=  false;
 

//   custLoanData.push(custloan);

//   const storeMock = {
//     pipe() {
//         select : {
//             return of(custLoanData
//             );
//           } 
//     }, 

//     dispatch(val) {

//     }
//   };

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [ FormsModule ],
//       declarations: [ CustomerLoansComponent, TopupInfoComponent, LoanDetailsComponent ], 
//       providers: [
//         {   provide : Store,
//             useValue: storeMock
//          }
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CustomerLoansComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
