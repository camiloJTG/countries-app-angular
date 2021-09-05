import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByLanguageComponent } from './by-language.component';

describe('ByLanguageComponent', () => {
  let component: ByLanguageComponent;
  let fixture: ComponentFixture<ByLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
