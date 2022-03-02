import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsPageDeleteComponent } from './rooms-page-delete.component';

describe('RoomsPageDeleteComponent', () => {
  let component: RoomsPageDeleteComponent;
  let fixture: ComponentFixture<RoomsPageDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsPageDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsPageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
