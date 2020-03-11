import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixodComponent } from './prixod.component';

describe('PrixodComponent', () => {
  let component: PrixodComponent;
  let fixture: ComponentFixture<PrixodComponent>;

  beforeEach(async(() =>  {
    TestBed.configureTestingModule({
      declarations: [ PrixodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
