import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasxodComponent } from './rasxod.component';

describe('RasxodComponent', () => {
  let component: RasxodComponent;
  let fixture: ComponentFixture<RasxodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasxodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasxodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
