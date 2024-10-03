import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdressListComponent } from './user-adress-list.component';

describe('UserAdressListComponent', () => {
  let component: UserAdressListComponent;
  let fixture: ComponentFixture<UserAdressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAdressListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
