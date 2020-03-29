import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostavchikiComponent } from './postavchiki.component';

describe('PostavchikiComponent', () => {
  let component: PostavchikiComponent;
  let fixture: ComponentFixture<PostavchikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostavchikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostavchikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
