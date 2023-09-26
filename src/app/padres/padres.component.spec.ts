import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadresComponent } from './padres.component';

describe('PadresComponent', () => {
  let component: PadresComponent;
  let fixture: ComponentFixture<PadresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadresComponent]
    });
    fixture = TestBed.createComponent(PadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
