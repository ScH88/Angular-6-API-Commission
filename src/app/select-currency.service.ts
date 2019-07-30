import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Currency } from './currency';

@Injectable({
  providedIn: 'root'
})
export class SelectCurrencyService {
  _url = 'http://localhost:3000/submitCurrency';
  constructor(private _http: HttpClient) { }

  submitCurrency(currency: Currency) {
    return this._http.post<any>(this._url, currency).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
