import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkshakeorderComponent } from './milkshakeorder.component';

describe('MilkshakeorderComponent', () => {
  let component: MilkshakeorderComponent;
  let fixture: ComponentFixture<MilkshakeorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilkshakeorderComponent]
    });
    fixture = TestBed.createComponent(MilkshakeorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
