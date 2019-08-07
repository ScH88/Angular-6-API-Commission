import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiRetrievalService } from '../api-retrieval.service';

@Component({
  selector: 'app-price-historical',
  templateUrl: './price-historical.component.html',
  styleUrls: ['./price-historical.component.css']
})
export class PriceHistoricalComponent implements OnInit {
  public fsym;
  public tsym;
  public _jsonData;
  title = '';

  constructor(private route: ActivatedRoute, private router: Router, private _apiRetrieval: ApiRetrievalService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let fsym = params.get('fsym');
      this.fsym = fsym;
      let tsym = params.get('tsym');
      this.tsym = tsym;
    });
    //
    this.title = "Price (Historical) Results For " + this.fsym;
    //
    this._apiRetrieval.priceHistorical(this.fsym, this.tsym)
        .subscribe(
          result =>  {
            this._jsonData = result[this.fsym];
            console.log('Success', result[this.fsym]);
          },
          error => this.errorMsg = error.statusText
        );
  }

  backToMain() {
    let selectedFsym = this.fsym ? this.fsym : null;
    let selectedTsym = this.tsym ? this.tsym : null;
    let selectedMode = "Price(Historical)";
    this.router.navigate(['home', {mode: selectedMode, fsym: selectedFsym, tsym: selectedTsym}]);
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }
}
