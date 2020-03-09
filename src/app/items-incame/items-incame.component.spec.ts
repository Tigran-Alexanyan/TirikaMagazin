import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsIncameComponent } from './items-incame.component';

describe('ItemsIncameComponent', () => {
  let component: ItemsIncameComponent;
  let fixture: ComponentFixture<ItemsIncameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsIncameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsIncameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
