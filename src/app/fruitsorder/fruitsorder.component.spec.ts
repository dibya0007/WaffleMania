import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsorderComponent } from './fruitsorder.component';

describe('FruitsorderComponent', () => {
  let component: FruitsorderComponent;
  let fixture: ComponentFixture<FruitsorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitsorderComponent]
    });
    fixture = TestBed.createComponent(FruitsorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
