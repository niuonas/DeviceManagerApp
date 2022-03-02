import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicePageInfoComponent } from './device-page-info.component';

describe('DevicePageInfoComponent', () => {
  let component: DevicePageInfoComponent;
  let fixture: ComponentFixture<DevicePageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicePageInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicePageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
