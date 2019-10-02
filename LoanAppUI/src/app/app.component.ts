import { Component } from '@angular/core';
import { CustomerLoanService } from '@services/customer-loan-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Loan App';
  show: boolean = true;
  constructor(){

  }

  ngOnInit(){
 
  }

  close(){
    this.show = false; 
  }

}
