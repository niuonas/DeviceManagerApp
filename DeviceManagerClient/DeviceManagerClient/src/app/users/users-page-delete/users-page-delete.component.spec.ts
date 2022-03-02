import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageDeleteComponent } from './users-page-delete.component';

describe('UsersPageDeleteComponent', () => {
  let component: UsersPageDeleteComponent;
  let fixture: ComponentFixture<UsersPageDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPageDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
