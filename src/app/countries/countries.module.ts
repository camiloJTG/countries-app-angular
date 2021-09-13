import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountriesRoutingModule } from './countries-routing.module';
import { MaterialModule } from '../material/material.module';

import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchBannerComponent } from './components/search-banner/search-banner.component';
import { DisplayTableComponent } from './components/display-table/display-table.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonSearchRegionComponent } from './components/button-search-region/button-search-region.component';
import { DetailCountryComponent } from './pages/detail-country/detail-country.component';

@NgModule({
  declarations: [
    ByNameComponent,
    ByCapitalComponent,
    ByRegionComponent,
    SidenavComponent,
    HomeComponent,
    SearchBannerComponent,
    DisplayTableComponent,
    PaginatorComponent,
    ButtonSearchRegionComponent,
    DetailCountryComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule,
  ],
})
export class CountriesModule {}
