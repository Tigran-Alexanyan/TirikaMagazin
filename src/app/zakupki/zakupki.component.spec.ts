import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakupkiComponent } from './zakupki.component';

describe('ZakupkiComponent', () => {
  let component: ZakupkiComponent;
  let fixture: ComponentFixture<ZakupkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZakupkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakupkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
