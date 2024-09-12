import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymentMethodComponent } from './user-payment-method.component';

describe('UserPaymentMethodComponent', () => {
  let component: UserPaymentMethodComponent;
  let fixture: ComponentFixture<UserPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPaymentMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
