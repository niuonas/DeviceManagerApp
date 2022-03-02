import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageChangeNameComponent } from './users-page-change-name.component';

describe('UsersPageChangeNameComponent', () => {
  let component: UsersPageChangeNameComponent;
  let fixture: ComponentFixture<UsersPageChangeNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPageChangeNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPageChangeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
