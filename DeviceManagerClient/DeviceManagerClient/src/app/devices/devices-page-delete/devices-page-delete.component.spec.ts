import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesPageDeleteComponent } from './devices-page-delete.component';

describe('DevicesPageDeleteComponent', () => {
  let component: DevicesPageDeleteComponent;
  let fixture: ComponentFixture<DevicesPageDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesPageDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesPageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
