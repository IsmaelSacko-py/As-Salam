import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPayoutComponent } from './user-payout.component';

describe('UserPayoutComponent', () => {
  let component: UserPayoutComponent;
  let fixture: ComponentFixture<UserPayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
