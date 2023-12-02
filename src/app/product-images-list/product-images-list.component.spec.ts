import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImagesListComponent } from './product-images-list.component';

describe('ProductImagesListComponent', () => {
  let component: ProductImagesListComponent;
  let fixture: ComponentFixture<ProductImagesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductImagesListComponent]
    });
    fixture = TestBed.createComponent(ProductImagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
