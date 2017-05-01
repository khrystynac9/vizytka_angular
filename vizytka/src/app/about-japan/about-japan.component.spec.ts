import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutJapanComponent } from './about-japan.component';

describe('AboutJapanComponent', () => {
  let component: AboutJapanComponent;
  let fixture: ComponentFixture<AboutJapanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutJapanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutJapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
