import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { PriceComponent } from './price/price.component';
import { PriceHistoricalComponent } from './price-historical/price-historical.component';
import { HistoryComponent } from './history/history.component';
import { HistoMinutesComponent } from './histo-minutes/histo-minutes.component';
import { HistoHoursComponent } from './histo-hours/histo-hours.component';
import { HistoDaysComponent } from './histo-days/histo-days.component';
import { TopPairsComponent } from './top-pairs/top-pairs.component';
import { LineGraphComponent } from './line-graph/line-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    HomeComponent,
    CoinListComponent,
    PriceComponent,
    PriceHistoricalComponent,
    HistoryComponent,
    HistoMinutesComponent,
    HistoHoursComponent,
    HistoDaysComponent,
    TopPairsComponent,
    LineGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
