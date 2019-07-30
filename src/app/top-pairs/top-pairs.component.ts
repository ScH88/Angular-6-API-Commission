import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ApiRetrievalService } from '../api-retrieval.service';
import { TopPair } from '../topPair';

@Component({
  selector: 'app-top-pairs',
  templateUrl: './top-pairs.component.html',
  styleUrls: ['./top-pairs.component.css']
})
export class TopPairsComponent implements OnInit {

  public fsym;
  public limit;
  public _topPairs:TopPair[] = [];
  title = '';

  constructor(private route: ActivatedRoute, private router: Router, private _apiRetrieval: ApiRetrievalService) { }

  ngOnInit() {
    //
    this.route.paramMap.subscribe((params: ParamMap) => {
      let fsym = params.get('fsym');
      this.fsym = fsym;
      let limit = params.get('limit');
      this.limit = limit;
    });
    //
    this.title = "Top Pairs For " + this.fsym;
    //
    this._apiRetrieval.topPairs(this.fsym, this.limit)
        .subscribe(
          result =>  {
            this._topPairs = result.Data;
            console.log('Success', result.Data);
          },
          error => this.errorMsg = error.statusText
        );
  }

  backToMain() {
    let selectedFsym = this.fsym ? this.fsym : null;
    let selectedLimit = this.limit ? this.limit : null;
    let selectedMode = "Top Pairs";
    this.router.navigate(['home', {mode: selectedMode, fsym: selectedFsym, limit: selectedLimit}]);
  }
}
