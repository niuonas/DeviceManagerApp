import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsPageChangeCapacityComponent } from './rooms-page-change-capacity.component';

describe('RoomsPageChangeCapacityComponent', () => {
  let component: RoomsPageChangeCapacityComponent;
  let fixture: ComponentFixture<RoomsPageChangeCapacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsPageChangeCapacityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsPageChangeCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
