import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICountrie } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css'],
})
export class ByCapitalComponent implements OnInit {
  countries: ICountrie[] = [];
  isError: boolean = false;
  termSearch: string = '';
  totalCountries: number = 0;
  cantPerPage: number = environment.cantPerPage;

  constructor(private countrieService: CountriesService) {}

  ngOnInit(): void {}

  search(term: string) {
    this.termSearch = term;
    this.isError = false;
    this.countrieService.getCapital(term.trim()).subscribe(
      (resp) => {
        this.totalCountries = resp.length;
        this.countries = resp.splice(0, this.cantPerPage);
      },
      (err) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }

  searchByPaginator(val1: number[]) {
    this.isError = false;
    this.countrieService.getCapital(this.termSearch.trim()).subscribe(
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
