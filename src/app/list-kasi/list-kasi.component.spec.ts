import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKasiComponent } from './list-kasi.component';

describe('ListKasiComponent', () => {
  let component: ListKasiComponent;
  let fixture: ComponentFixture<ListKasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
