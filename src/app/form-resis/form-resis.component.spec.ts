import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResisComponent } from './form-resis.component';

describe('FormResisComponent', () => {
  let component: FormResisComponent;
  let fixture: ComponentFixture<FormResisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormResisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
