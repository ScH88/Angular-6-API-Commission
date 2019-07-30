import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ApiRetrievalService } from '../api-retrieval.service';
import { Histo } from '../histo';

@Component({
  selector: 'app-histo-days',
  templateUrl: './histo-days.component.html',
  styleUrls: ['./histo-days.component.css']
})
export class HistoDaysComponent implements OnInit {
  public fsym;
  public tsym;
  public limit;
  public _histos:Histo[] = [];
  title = '';
  public miscInfo = [];

  constructor(private route: ActivatedRoute, private router: Router, private _apiRetrieval: ApiRetrievalService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let fsym = params.get('fsym');
      this.fsym = fsym;
      let tsym = params.get('tsym');
      this.tsym = tsym;
      let limit = params.get('limit')
      this.limit = limit;
    });
    //
    this.title = "Minute History For " + this.fsym + " vs " + this.tsym;
    //
    this._apiRetrieval.histoMinute(this.fsym, this.tsym, this.limit)
        .subscribe(
          result =>  {
            this._histos = result.Data;
            this.miscInfo = {
              timeTo:result.TimeTo;
              timeFrom:result.TimeFrom;
            },
            console.log('Success', result);
          },
          error => this.errorMsg = error.statusText
        );
  }

  ngAfterContentInit() {

  }

  backToMain() {
    let selectedFsym = this.fsym ? this.fsym : null;
    let selectedTsym = this.tsym ? this.tsym : null;
    let selectedLimit = this.limit ? this.limit : null;
    let selectedMode = "HistoMinute";
    this.router.navigate(['home', {mode: selectedMode, fsym: selectedFsym, tsym: selectedTsym, limit: selectedLimit}]);
  }
}
