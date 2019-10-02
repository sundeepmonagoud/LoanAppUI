
import { fakeAsync, async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupInfoComponent } from './topup-info.component';
import { HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing'; 
import { InjectionToken, DebugElement } from '@angular/core'; 
import { selectCustomerLoans, selectTopUpBalance } from '@app/reducers';
import { By } from '@angular/platform-browser';

describe('TopupInfoComponent', () => {
  let component: TopupInfoComponent;
  let fixture: ComponentFixture<TopupInfoComponent>;
  const initialState = { customerLoanData : null };
 

  const storeMock = {
    pipe() {
        select : {
            return of( 1000
            );
          } 
    }
  
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupInfoComponent ],
      providers: [
        {   provide : Store,
            useValue: storeMock
         }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TopupInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should check the data on the page ', fakeAsync (() => {
   
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
  
      const hostElement = fixture.nativeElement;
      const btnIncLoanAmt: HTMLButtonElement = hostElement.querySelector('#btnIncLoanAmt');
      const bannerElement: HTMLElement = fixture.nativeElement;
      expect(bannerElement.innerHTML).toContain('Carryouver/Payout Amount');
      expect(bannerElement.innerHTML).toContain('To apply for TopUp of an existing loan amount please select the loan below, make note of the Carry-over amount before proceeding.');
      expect(bannerElement.innerHTML).toContain('Apply for increase Loan Amounts');
      expect(bannerElement.innerHTML).toContain('Apply for new Personal Loan');
    });
  })
  );

  
});
