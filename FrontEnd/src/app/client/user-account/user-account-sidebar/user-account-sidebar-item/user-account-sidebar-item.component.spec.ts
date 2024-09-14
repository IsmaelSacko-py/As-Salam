import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountSidebarItemComponent } from './user-account-sidebar-item.component';

describe('UserAccountSidebarItemComponent', () => {
  let component: UserAccountSidebarItemComponent;
  let fixture: ComponentFixture<UserAccountSidebarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAccountSidebarItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccountSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
