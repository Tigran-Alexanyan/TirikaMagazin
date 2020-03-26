import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrypiComponent } from './grypi.component';

describe('GrypiComponent', () => {
  let component: GrypiComponent;
  let fixture: ComponentFixture<GrypiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrypiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrypiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
