import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IDictionary } from '@common/dictionary';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
    public constructor(public httpclient: HttpClient) {

    }

    get<T>(endPoint: string, params?: IDictionary<string>) {

        let httpParams;

        if (params) {
            httpParams = this.buildParams(params);
        }

        return this.httpclient.get<T>(endPoint,
            { params: httpParams }).pipe(
                tap(_ => this.log(`fetched values for ` + JSON.stringify(params))),
                catchError(this.handleError<T>(`getHero id=${JSON.stringify(params)}`)
            ));

    }
  
    // post(endPoint: string, requestObject: any) {
    //     return this.httpclient.post(endPoint, requestObject).map(res => JSON.parse(JSON.stringify(res)));
    // }

    // /**
    //  * put
    //  */
    // public put(endPoint: string, requestObject: any) {
    //     return this.httpclient.put(endPoint, requestObject).map(res => JSON.parse(JSON.stringify(res)));
    // }

    // public delete(endPoint: string, params?: IDictionary<string>) {

    //     let httpParams;

    //     if (params) {
    //         httpParams = this.buildParams(params);
    //     }


    //     return this.httpclient.delete(endPoint, httpParams).map(res => JSON.parse(JSON.stringify(res)));
    // }


    /**
     * buildParams - Converts from Dictionary to HttpParams
     */
    public buildParams(params: IDictionary<string>): HttpParams {
        let httpParams = new HttpParams();

        if (params) {
            const keys: string[] = params.Keys();

            keys.forEach(key => {
                httpParams = httpParams.append(key, params.Item(key));
            });
        }

        return httpParams;
    }

    private log(message: string) {
        // this.messageService.add(`HeroService: ${message}`);
        console.log(message);
    }
      
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead

          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
      
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
      

}