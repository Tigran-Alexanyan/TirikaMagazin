import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdajiComponent } from './prodaji.component';

describe('ProdajiComponent', () => {
  let component: ProdajiComponent;
  let fixture: ComponentFixture<ProdajiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdajiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
