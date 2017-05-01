import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutItalienComponent } from './about-italien.component';

describe('AboutItalienComponent', () => {
  let component: AboutItalienComponent;
  let fixture: ComponentFixture<AboutItalienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutItalienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutItalienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
