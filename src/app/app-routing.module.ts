import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MiningContractsComponent } from './mining-contracts/mining-contracts.component';
import { MiningEquipmentComponent } from './mining-equipment/mining-equipment.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HistoDaysComponent } from './histo-days/histo-days.component';
import { HistoHoursComponent } from './histo-hours/histo-hours.component';
import { HistoMinutesComponent } from './histo-minutes/histo-minutes.component';
import { HistoryComponent } from './history/history.component';
import { PriceComponent } from './price/price.component';
import { PriceHistoricalComponent } from './price-historical/price-historical.component';
import { TopPairsComponent } from './top-pairs/top-pairs.component';

const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch:'full' },
    { path: 'home', component:HomeComponent},
    { path: 'coinlist', component:CoinListComponent},
    { path: 'history', redirectTo: '/history/:days', pathMatch: 'full' },
    { path: 'history/mins', component:HistoMinutesComponent},
    { path: 'history/hrs', component:HistoHoursComponent},
    { path: 'history/days', component:HistoDaysComponent},
    { path: 'history/**', redirectTo: '**', pathMatch: 'full' },
    { path: 'price', component:PriceComponent},
    { path: 'pricehistorical', component:PriceHistoricalComponent},
    { path: 'price/historical', component:PriceHistoricalComponent},
    { path: 'price/**', redirectTo: '**', pathMatch: 'full' },
    { path: 'toppairs', component:TopPairsComponent},
    { path: '**', component: PagenotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
    HomeComponent, CoinListComponent, PagenotfoundComponent,
    HistoDaysComponent, HistoHoursComponent, HistoMinutesComponent, HistoryComponent, PriceComponent,
    PriceHistoricalComponent, TopPairsComponent
];
