import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLetterComponent } from './svg-letter.component';

describe('SvgLetterComponent', () => {
  let component: SvgLetterComponent;
  let fixture: ComponentFixture<SvgLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
