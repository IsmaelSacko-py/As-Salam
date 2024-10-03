import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdressAddComponent } from './user-adress-add.component';

describe('UserAdressAddComponent', () => {
  let component: UserAdressAddComponent;
  let fixture: ComponentFixture<UserAdressAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAdressAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdressAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
