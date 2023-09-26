import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradosyseccionesComponent } from './gradosysecciones.component';

describe('GradosyseccionesComponent', () => {
  let component: GradosyseccionesComponent;
  let fixture: ComponentFixture<GradosyseccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradosyseccionesComponent]
    });
    fixture = TestBed.createComponent(GradosyseccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
