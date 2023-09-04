import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaffyorderComponent } from './waffyorder.component';

describe('WaffyorderComponent', () => {
  let component: WaffyorderComponent;
  let fixture: ComponentFixture<WaffyorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaffyorderComponent]
    });
    fixture = TestBed.createComponent(WaffyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
