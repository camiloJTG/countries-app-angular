import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @Input()
  totalCant: number = 0;
  @Input()
  cantPerPage: number = 20;
  @Output()
  valuePerPage: EventEmitter<number[]> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handlerPagination(event: PageEvent) {
    let startSearch: number =
      (event.pageIndex + 1) * this.cantPerPage - this.cantPerPage;
    this.valuePerPage.emit([startSearch, this.cantPerPage]);
  }
}
