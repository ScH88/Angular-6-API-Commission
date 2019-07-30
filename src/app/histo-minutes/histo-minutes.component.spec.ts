import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoMinutesComponent } from './histo-minutes.component';

describe('HistoMinutesComponent', () => {
  let component: HistoMinutesComponent;
  let fixture: ComponentFixture<HistoMinutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoMinutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
