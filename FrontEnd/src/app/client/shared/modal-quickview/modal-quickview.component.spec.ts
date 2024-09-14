import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuickviewComponent } from './modal-quickview.component';

describe('ModalQuickviewComponent', () => {
  let component: ModalQuickviewComponent;
  let fixture: ComponentFixture<ModalQuickviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalQuickviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalQuickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
