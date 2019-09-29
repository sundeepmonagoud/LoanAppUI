import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoansComponent } from './customer-loans/customer-loans.component';
import { BaseService } from '@services/base-service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './reducers';
import { environment } from 'environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CustomerLoanEffects } from './effects/customerloan.effects';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerLoanService } from './services/customer-loan-service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerLoansComponent, 
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([CustomerLoanEffects]),
  ],
  providers: [

    BaseService,
    CustomerLoanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
