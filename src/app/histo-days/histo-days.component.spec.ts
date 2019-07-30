import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoDaysComponent } from './histo-days.component';

describe('HistoDaysComponent', () => {
  let component: HistoDaysComponent;
  let fixture: ComponentFixture<HistoDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
