import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefooterComponent } from './prefooter.component';

describe('PrefooterComponent', () => {
  let component: PrefooterComponent;
  let fixture: ComponentFixture<PrefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrefooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
