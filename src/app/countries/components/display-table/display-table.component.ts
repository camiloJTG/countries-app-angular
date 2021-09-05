import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ICountrie } from '../../interfaces/countries';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css'],
})
export class DisplayTableComponent implements OnInit {
  @Input()
  countries: ICountrie[] = [];

  headers: string[] = ['Bandera', 'Nombre', 'Región', 'Capital', 'Detalle'];

  constructor() {}

  ngOnInit(): void {}
}
