import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListProductComponent } from './data-list-product.component';

describe('DataListProductComponent', () => {
  let component: DataListProductComponent;
  let fixture: ComponentFixture<DataListProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataListProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
