import { Component, OnInit, Input } from '@angular/core';
import { CustomerLoanData } from '@app/common/customer-loans.model';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {


  @Input() customerLoanData:CustomerLoanData;

  constructor() { }

  ngOnInit() {
  }

}
