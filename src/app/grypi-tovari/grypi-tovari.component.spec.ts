import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrypiTovariComponent } from './grypi-tovari.component';

describe('GrypiTovariComponent', () => {
  let component: GrypiTovariComponent;
  let fixture: ComponentFixture<GrypiTovariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrypiTovariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrypiTovariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
