import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsPageCreateComponent } from './rooms-page-create.component';

describe('RoomsPageCreateComponent', () => {
  let component: RoomsPageCreateComponent;
  let fixture: ComponentFixture<RoomsPageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsPageCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsPageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
