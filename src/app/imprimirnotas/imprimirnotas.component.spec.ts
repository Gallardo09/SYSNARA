import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimirnotasComponent } from './imprimirnotas.component';

describe('ImprimirnotasComponent', () => {
  let component: ImprimirnotasComponent;
  let fixture: ComponentFixture<ImprimirnotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimirnotasComponent]
    });
    fixture = TestBed.createComponent(ImprimirnotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
