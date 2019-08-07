import { Component, OnInit } from '@angular/core';
import { ApiRetrievalService } from '../api-retrieval.service';
import { MiningEquipment } from '../miningEquipment';


@Component({
  selector: 'app-mining-equipment',
  templateUrl: './mining-equipment.component.html',
  styleUrls: ['./mining-equipment.component.css']
})
export class MiningEquipmentComponent implements OnInit {

  title = 'Mining Equipment';
  public _jsonData:MiningEquipment[] = [];

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
