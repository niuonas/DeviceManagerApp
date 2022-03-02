import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesPageCreateComponent } from './devices-page-create.component';

describe('DevicesPageCreateComponent', () => {
  let component: DevicesPageCreateComponent;
  let fixture: ComponentFixture<DevicesPageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesPageCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesPageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
