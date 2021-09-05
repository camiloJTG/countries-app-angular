import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-banner',
  templateUrl: './search-banner.component.html',
  styleUrls: ['./search-banner.component.css'],
})
export class SearchBannerComponent implements OnInit {
  @Input()
  title: string = '';
  @Input()
  nameInput = '';
  @Input()
  placeholderInput: string = '';
  @Output()
  onEnter: EventEmitter<string> = new EventEmitter();

  searchTerm: string = '';

  constructor() {}
  ngOnInit(): void {}

  search() {
    this.onEnter.emit(this.searchTerm);
  }
}
