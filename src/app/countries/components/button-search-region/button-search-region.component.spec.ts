import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSearchRegionComponent } from './button-search-region.component';

describe('ButtonSearchRegionComponent', () => {
  let component: ButtonSearchRegionComponent;
  let fixture: ComponentFixture<ButtonSearchRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSearchRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSearchRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
