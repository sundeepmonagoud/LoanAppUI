import { environment } from '../../environments/environment';

export class AppSettings {
    
    public static API_CUSTOMER_LOAN_GET_CUSTOMER_LOANS = 'customerloan/getcustomerloans';

    public static API_ENDPOINT = environment.api_endpoint ;

    // constructor(){
    //     this.API_ENDPOINT = environment.api_endpoint;
    // }
}