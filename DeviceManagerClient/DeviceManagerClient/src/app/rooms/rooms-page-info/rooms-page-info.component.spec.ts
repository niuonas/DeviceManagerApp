import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsPageInfoComponent } from './rooms-page-info.component';

describe('RoomsPageInfoComponent', () => {
  let component: RoomsPageInfoComponent;
  let fixture: ComponentFixture<RoomsPageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsPageInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
