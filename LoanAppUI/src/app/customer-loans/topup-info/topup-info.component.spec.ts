// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { TopupInfoComponent } from './topup-info.component';
// import { HttpTestingController } from '@angular/common/http/testing';
// import { of } from 'rxjs';

// import { Store } from '@ngrx/store';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';


// describe('TopupInfoComponent', () => {
//   let component: TopupInfoComponent;
//   let fixture: ComponentFixture<TopupInfoComponent>;
//   const initialState = { customerLoanData : null };
 

//   let store : MockStore< [{
//     LoanId :1, 
//     LoanNumber:4567389987,
//     Name:"Personal Loan 1",
//     Balance:1800.00,Interest:200.00,EarlyRePaymentFee:100.00,PayoutAmount:2100.00, IsSelected: false},
//    {LoanId:2, LoanNumber:4567282937,Name:"Personal Loan 2",Balance:1500.00,Interest:100.00,EarlyRePaymentFee:50.00,PayoutAmount:1650.00, IsSelected: false}]>

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ TopupInfoComponent ],
//       providers: [
//         provideMockStore({ initialState })
//       ]
//     })
//     .compileComponents();

//     store = TestBed.get<Store>(Store);
  
      
//   }));

//   beforeEach(() => {

//     fixture = TestBed.createComponent(TopupInfoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
