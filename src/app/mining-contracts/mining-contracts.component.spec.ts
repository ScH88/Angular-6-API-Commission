import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningContractsComponent } from './mining-contracts.component';

describe('MiningContractsComponent', () => {
  let component: MiningContractsComponent;
  let fixture: ComponentFixture<MiningContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
