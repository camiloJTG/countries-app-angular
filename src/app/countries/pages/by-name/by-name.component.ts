import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICountrie } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.css'],
})
export class ByNameComponent implements OnInit {
  isError: boolean = false;
  countries: ICountrie[] = [];
  totalCountries: number = 0;
  cantPerPage: number = environment.cantPerPage;
  termSearch: string = '';

  constructor(private countrieService: CountriesService) {}

  ngOnInit(): void {}

  search(term: string) {
    this.termSearch = term;
    this.isError = false;
    this.countrieService.getCountry(term.trim()).subscribe(
      (resp) => {
        this.countries = resp.splice(0, this.cantPerPage);
        this.totalCountries = resp.length;
      },
      (err) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }

  searchByPaginator(pagination: number[]) {
    this.isError = false;
    this.countrieService.getCountry(this.termSearch.trim()).subscribe(
      (resp) => {
        this.countries = resp.splice(pagination[0], pagination[1]);
        this.totalCountries = resp.length;
      },
      (err) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }
}
