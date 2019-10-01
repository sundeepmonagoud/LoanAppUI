import { CustomerLoanService } from "./customer-loan-service";
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BaseService } from './base-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CustomerLoanData } from '@app/common/customer-loans.model';
import { of } from 'rxjs';


let httpClientSpy: { get: jasmine.Spy };
let cussService: CustomerLoanService;
describe('CustomerLoanService', () => {
   
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
      
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        cussService = new CustomerLoanService(new BaseService(<any> httpClientSpy));

    });

  
    it('#getLoans should return value from observable',() => {

            const expectedCustomerLoans: CustomerLoanData[] =
            [{
                LoanId :1, 
                LoanNumber:4567389987,
                Name:"Personal Loan 1",
                Balance:1800.00,Interest:200.00,EarlyRePaymentFee:100.00,PayoutAmount:2100.00, IsSelected: false},
            {LoanId:2, LoanNumber:4567282937,Name:"Personal Loan 2",Balance:1500.00,Interest:100.00,EarlyRePaymentFee:50.00,PayoutAmount:1650.00, IsSelected: false}];
        
          httpClientSpy.get.and.returnValue(of(expectedCustomerLoans));

        cussService.getCustomerLoans().subscribe(value => {

            expect(value[0].LoanId).toEqual(1);

            expect(value[0].LoanNumber).toEqual(4567389987);
            expect(value[0].Name).toEqual('Personal Loan 1');
    
      });



    });
  });
