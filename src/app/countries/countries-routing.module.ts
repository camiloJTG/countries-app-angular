import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCurrencyComponent } from './pages/by-currency/by-currency.component';
import { ByLanguageComponent } from './pages/by-language/by-language.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'byCapital',
        component: ByCapitalComponent,
      },
      {
        path: 'byCurrency',
        component: ByCurrencyComponent,
      },
      {
        path: 'byLanguage',
        component: ByLanguageComponent,
      },
      {
        path: 'byName',
        component: ByNameComponent,
      },
      {
        path: 'byRegion',
        component: ByRegionComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
