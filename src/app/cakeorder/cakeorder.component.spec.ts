import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeorderComponent } from './cakeorder.component';

describe('CakeorderComponent', () => {
  let component: CakeorderComponent;
  let fixture: ComponentFixture<CakeorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeorderComponent]
    });
    fixture = TestBed.createComponent(CakeorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
