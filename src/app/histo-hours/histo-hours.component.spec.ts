import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoHoursComponent } from './histo-hours.component';

describe('HistoHoursComponent', () => {
  let component: HistoHoursComponent;
  let fixture: ComponentFixture<HistoHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
