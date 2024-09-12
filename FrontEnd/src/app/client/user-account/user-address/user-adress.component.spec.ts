import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdressComponent } from './user-adress.component';

describe('UserAdressComponent', () => {
  let component: UserAdressComponent;
  let fixture: ComponentFixture<UserAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAdressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
