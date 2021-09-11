import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-search-region',
  templateUrl: './button-search-region.component.html',
  styleUrls: ['./button-search-region.component.css'],
})
export class ButtonSearchRegionComponent implements OnInit {
  @Output()
  ternSearch: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickButton(event: any) {
    if (event.srcElement.offsetParent.name) {
      this.ternSearch.emit(event.srcElement.offsetParent.name);
    } else {
      this.ternSearch.emit(event.target.id);
    }
  }
}
