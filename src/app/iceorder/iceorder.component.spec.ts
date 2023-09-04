import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceorderComponent } from './iceorder.component';

describe('IceorderComponent', () => {
  let component: IceorderComponent;
  let fixture: ComponentFixture<IceorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IceorderComponent]
    });
    fixture = TestBed.createComponent(IceorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
