import { Component, OnInit } from '@angular/core';
import { ApiRetrievalService } from '../api-retrieval.service';
import { MiningContract } from '../miningContract';

@Component({
  selector: 'app-mining-contracts',
  templateUrl: './mining-contracts.component.html',
  styleUrls: ['./mining-contracts.component.css']
})
export class MiningContractsComponent implements OnInit {
  title = 'Mining Contracts';
  public _jsonData:MiningContract[] = [];

  constructor(private _apiRetrieval: ApiRetrievalService) { }

  ngOnInit() {
    this._apiRetrieval.miningContracts()
        .subscribe(
          result =>  {
            this._jsonData = result.MiningData;
            console.log('Success', result.MiningData);
          },
          error => this.errorMsg = error.statusText
        );
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

}
