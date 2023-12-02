import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUserListComponent } from './product-user-list.component';

describe('ProductUserListComponent', () => {
  let component: ProductUserListComponent;
  let fixture: ComponentFixture<ProductUserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductUserListComponent]
    });
    fixture = TestBed.createComponent(ProductUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
