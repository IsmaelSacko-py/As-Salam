import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTransactionComponent } from './user-transaction.component';

describe('UserTransactionComponent', () => {
  let component: UserTransactionComponent;
  let fixture: ComponentFixture<UserTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
