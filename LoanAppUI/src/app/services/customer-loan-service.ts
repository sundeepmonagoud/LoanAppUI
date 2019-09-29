import { Injectable } from '@angular/core';
import { AppSettings } from '@common/app-settings';
import { BaseService } from '@services/base-service';
import { CustomerLoanData  } from '@common/customer-loans.model';
import { Observable } from 'rxjs';
@Injectable()
export class CustomerLoanService {

    public constructor(private httpService: BaseService) {

    }

    getCustomerLoans(): Observable<CustomerLoanData[]> {
        return this.httpService.get<CustomerLoanData[]>(AppSettings.API_ENDPOINT + AppSettings.API_CUSTOMER_LOAN_GET_CUSTOMER_LOANS);
    }

}
