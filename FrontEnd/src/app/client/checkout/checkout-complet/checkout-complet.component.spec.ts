import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCompletComponent } from './checkout-complet.component';

describe('CheckoutCompletComponent', () => {
  let component: CheckoutCompletComponent;
  let fixture: ComponentFixture<CheckoutCompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutCompletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
