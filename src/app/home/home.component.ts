import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SelectCurrencyService } from '../select-currency.service'
import { Currency } from '../currency';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //
  title = 'Welcome To Crypto Compare';
  //
  options = [
    'Price', 'Price(Historical)', 'HistoMinute', 'HistoHour', 'HistoDay', 'Top Pairs'
  ]
  //
  currencies = [
      { domain: 'Bitcoin', code: 'BTC' },
      { domain: 'Canada', code: 'CAD' },
      { domain: 'China', code: 'CNY' },
      { domain: 'EU', code: 'EUR' },
      { domain: 'India', code: 'INR' },
      { domain: 'Japan', code: 'JPY' },
      { domain: 'Russia', code: 'RUB' },
      { domain: 'United States', code: 'USD' },
      { domain: 'United Kingdom', code: 'GBP' }
  ];
  //
  queryMode = 'Price';
  fsym = 'default';
  tsym = 'default';
  limit = 1;
  //
  currencyHasError = false;
  //
  currency2HasError = false;

  constructor(private router: Router, private route: ActivatedRoute,  private _selectCurrency: SelectCurrencyService,
      private _formBuilder: FormBuilder) { }

  ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
          let queryMode = params.get('mode');
          if (queryMode) {
            this.queryMode = queryMode
          }
          let fsym = params.get('fsym');
          if (fsym) {
            this.fsym = fsym;
          }
          let tsym = params.get('tsym');
          if (tsym) {
            this.tsym = tsym;
          }
          let limit = params.get('limit');
          if (limit) {
            this.limit = parseInt(limit);
          }
      });
  }

  validateCurrency(value) {
      if (value === "default") {
          this.currencyHasError = true;
      } else {
          this.currencyHasError = false;
      }
  }
  validateCurrency2(value) {
      if (value === "default") {
          this.currency2HasError = true;
      } else {
          this.currency2HasError = false;
      }
  }

  onSubmit(currencyForm) {
      //
      if (this.queryMode==='Price') {
        this.router.navigate(['/price', {
          fsym: this.fsym,
          tsym: this.tsym
        }]);
      } else if (this.queryMode==='Price(Historical)') {
        this.router.navigate(['/price/historical/', {
          fsym: this.fsym,
          tsym: this.tsym
        }]);
      } else if (this.queryMode==='HistoMinute') {
        this.router.navigate(['/history/mins/', {
          fsym: this.fsym,
          tsym: this.tsym,
          limit: this.limit
        }]);
      } else if (this.queryMode==='HistoHour') {
        this.router.navigate(['/history/hrs/', {
          fsym: this.fsym,
          tsym: this.tsym,
          limit: this.limit
        }]);
      } else if (this.queryMode==='HistoDay') {
        this.router.navigate(['/history/days/', {
          fsym: this.fsym,
          tsym: this.tsym,
          limit: this.limit
        }]);
      } else if (this.queryMode==='Top Pairs') {
        this.router.navigate(['/toppairs', {
          fsym: this.fsym,
          limit: this.limit
        }]);
      }
  }
}
