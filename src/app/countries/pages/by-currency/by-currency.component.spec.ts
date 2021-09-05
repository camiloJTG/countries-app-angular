import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCurrencyComponent } from './by-currency.component';

describe('ByCurrencyComponent', () => {
  let component: ByCurrencyComponent;
  let fixture: ComponentFixture<ByCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
