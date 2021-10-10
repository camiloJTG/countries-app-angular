import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICountrie } from '../../interfaces/countries';
import { DisplayCardComponent } from '../display-card/display-card.component';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css'],
})
export class DisplayTableComponent implements OnInit {
  @Input()
  countries: ICountrie[] = [];

  headers: string[] = ['Bandera', 'Nombre', 'Región', 'Capital', 'Detalle'];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDetail(name: string) {
    let countryFound: ICountrie | undefined = this.countries.find(
      (country) => country.name === name
    );

    this.dialog.open(DisplayCardComponent, { data: countryFound });
  }
}
