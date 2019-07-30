import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPairsComponent } from './top-pairs.component';

describe('TopPairsComponent', () => {
  let component: TopPairsComponent;
  let fixture: ComponentFixture<TopPairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
