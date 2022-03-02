import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageChangePasswordComponent } from './users-page-change-password.component';

describe('UsersPageChangePasswordComponent', () => {
  let component: UsersPageChangePasswordComponent;
  let fixture: ComponentFixture<UsersPageChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPageChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPageChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
