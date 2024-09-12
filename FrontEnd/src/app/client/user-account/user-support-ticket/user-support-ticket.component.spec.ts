import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSupportTicketComponent } from './user-support-ticket.component';

describe('UserSupportTicketComponent', () => {
  let component: UserSupportTicketComponent;
  let fixture: ComponentFixture<UserSupportTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSupportTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSupportTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
