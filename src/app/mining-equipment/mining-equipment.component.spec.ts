import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningEquipmentComponent } from './mining-equipment.component';

describe('MiningEquipmentComponent', () => {
  let component: MiningEquipmentComponent;
  let fixture: ComponentFixture<MiningEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
