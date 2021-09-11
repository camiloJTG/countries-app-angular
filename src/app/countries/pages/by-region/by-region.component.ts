import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICountrie } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent implements OnInit {
  isError: boolean = false;
  countries: ICountrie[] = [];
  termSearch: string = '';
  cantPerPage: number = environment.cantPerPage;
  totalCountries: number = 0;

  constructor(private countrieService: CountriesService) {}

  ngOnInit(): void {}

  search(term: string): void {
    this.termSearch = term;
    this.countrieService.getRegion(term.trim()).subscribe(
      (resp) => {
        this.totalCountries = resp.length;
        this.countries = resp.splice(0, this.cantPerPage);
        this.isError = false;
      },
      (err) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }

  searchByPaginator(val1: number[]) {
    this.isError = false;
    this.countrieService.getRegion(this.termSearch.trim()).subscribe(
      (resp) => {
        this.totalCountries = resp.length;
        this.countries = resp.splice(val1[0], val1[1]);
      },
      (err) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }
}
