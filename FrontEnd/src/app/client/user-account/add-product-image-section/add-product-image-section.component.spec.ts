import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductImageSectionComponent } from './add-product-image-section.component';

describe('AddProductImageSectionComponent', () => {
  let component: AddProductImageSectionComponent;
  let fixture: ComponentFixture<AddProductImageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductImageSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
