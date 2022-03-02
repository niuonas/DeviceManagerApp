import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageInfoComponent } from './users-page-info.component';

describe('UsersPageInfoComponent', () => {
  let component: UsersPageInfoComponent;
  let fixture: ComponentFixture<UsersPageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPageInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
