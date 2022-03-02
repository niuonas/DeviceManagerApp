import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesPageAssignComponent } from './devices-page-assign.component';

describe('DevicesPageAssignComponent', () => {
  let component: DevicesPageAssignComponent;
  let fixture: ComponentFixture<DevicesPageAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesPageAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesPageAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
