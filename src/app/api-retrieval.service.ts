import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CoinListing } from './coinListing';

@Injectable({
  providedIn: 'root'
})
export class ApiRetrievalService {

  constructor(private _http: HttpClient) { }

  coinList() {
    return this._http.get('https://min-api.cryptocompare.com/data/all/coinlist').pipe(catchError(this.errorHandler));
  }

  price(fsym: string, tsym: string) {
    let custom_url = 'https://min-api.cryptocompare.com/data/price?fsym=' + fsym + '&tsyms=' + tsym;
    return this._http.get(custom_url).pipe(catchError(this.errorHandler));
  }

  priceHistorical(fsym: string, tsym: string) {
    let custom_url = 'https://min-api.cryptocompare.com/data/pricehistorical?fsym=' + fsym + '&tsyms=' + tsym;
    return this._http.get(custom_url).pipe(catchError(this.errorHandler));
  }

  coinSnapshot(fsym: string, tsym: string) {
    let custom_url = 'https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=' + fsym + '&tsym=' + tsym;
    return this._http.get(custom_url).pipe(catchError(this.errorHandler));
  }

  histoMinute(fsym: string, tsym: string, limit: number) {
    let custom_url = 'https://min-api.cryptocompare.com/data/histominute?fsym=' + fsym + '&tsym=' + tsym + '&limit=' + limit + '&aggregate=3&e=CCCAGG';
    return this._http.get(custom_url).pipe(catchError(this.errorHandler));
  }

  histoHour(fsym: string, tsym: string, limit: number) {
    let custom_url = 'https://min-api.cryptocompare.com/data/histohour?fsym=' + fsym + '&tsym=' + tsym + '&limit=' + limit + '&aggregate=3&e=CCCAGG';
    return this._http.get(custom_url).pipe(catchError(this.errorHandler));
  }

  histoDay(fsym: string, tsym: string, limit: number) {
    let custom_url = 'https://min-api.cryptocompare.com/data/histoday?fsym=' + fsym + '&tsym=' + tsym + '&limit=' + limit + '&aggregate=3&e=CCCAGG';
    return this._http.get(custom_url).pipe(catchError(this.errorHandler));
  }

  miningContracts() {
    return this._http.get('https://www.cryptocompare.com/api/data/miningcontracts/').pipe(catchError(this.errorHandler));
  }

  miningEquipment() {
    return this._http.get('https://www.cryptocompare.com/api/data/miningequipment/').pipe(catchError(this.errorHandler));
  }

  topPairs(fsym: string, limit: number) {
    let custom_url = 'https://min-api.cryptocompare.com/data/top/pairs?fsym=' + fsym + '&limit=' + limit;
    return this._http.get(custom_url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
