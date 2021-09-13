import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICountrie } from '../../interfaces/countries';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css'],
})
export class DisplayCardComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICountrie) {}

  ngOnInit(): void {}
}
