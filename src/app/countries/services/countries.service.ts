import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICountrie } from '../interfaces/countries';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCapital(capital: string): Observable<ICountrie[]> {
    return this.http.get<ICountrie[]>(`${this.baseUrl}/capital/${capital}`);
  }

  getCountry(country: string): Observable<ICountrie[]> {
    return this.http.get<ICountrie[]>(`${this.baseUrl}/name/${country}`);
  }
}
