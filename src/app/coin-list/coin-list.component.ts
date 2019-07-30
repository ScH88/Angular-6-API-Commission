import { Component, OnInit } from '@angular/core';
import { ApiRetrievalService } from '../api-retrieval.service';
import { CoinListing } from '../coinListing';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {
  title = 'Coin List';
  public _jsonData:CoinListing[] = [];

  constructor(private _apiRetrieval: ApiRetrievalService) { }

  ngOnInit() {
    this._apiRetrieval.coinList()
        .subscribe(
          result =>  {
            this._jsonData = result.Data;
            console.log('Success', result.Data);
          },
          error => this.errorMsg = error.statusText
        );
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }
}
