import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageCreateComponent } from './users-page-create.component';

describe('UsersPageCreateComponent', () => {
  let component: UsersPageCreateComponent;
  let fixture: ComponentFixture<UsersPageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPageCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
