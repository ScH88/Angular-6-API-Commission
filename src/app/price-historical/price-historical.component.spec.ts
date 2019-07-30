import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceHistoricalComponent } from './price-historical.component';

describe('PriceHistoricalComponent', () => {
  let component: PriceHistoricalComponent;
  let fixture: ComponentFixture<PriceHistoricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceHistoricalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
