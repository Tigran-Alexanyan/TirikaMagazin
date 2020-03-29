import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSupplierComponent } from './change-supplier.component';

describe('ChangeSupplierComponent', () => {
  let component: ChangeSupplierComponent;
  let fixture: ComponentFixture<ChangeSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
