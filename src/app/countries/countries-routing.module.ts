import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { DetailCountryComponent } from './pages/detail-country/detail-country.component';
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
        path: 'byName',
        component: ByNameComponent,
      },
      {
        path: 'byRegion',
        component: ByRegionComponent,
      },
      {
        path: 'country/:id',
        component: DetailCountryComponent,
      },
      {
        path: '**',
        redirectTo: '/byCapital',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
