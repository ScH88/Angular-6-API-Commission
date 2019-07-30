import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiRetrievalService } from '../api-retrieval.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
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
    this.title = "Price Results For " + this.fsym;
    //
    this._apiRetrieval.price(this.fsym, this.tsym)
        .subscribe(
          result =>  {
            this._jsonData = result;
            console.log('Success', result);
          },
          error => this.errorMsg = error.statusText
      );
  }

  backToMain() {
    let selectedFsym = this.fsym ? this.fsym : null;
    let selectedTsym = this.tsym ? this.tsym : null;
    let selectedMode = "Price";
    this.router.navigate(['home', {mode: selectedMode, fsym: selectedFsym, tsym: selectedTsym}]);
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }
}
