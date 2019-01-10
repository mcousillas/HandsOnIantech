import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetidorFormComponent } from './competidor-form.component';

describe('CompetidorFormComponent', () => {
  let component: CompetidorFormComponent;
  let fixture: ComponentFixture<CompetidorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetidorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetidorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
