import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lec9InterfacesObservablesComponent } from './lec9-interfaces-observables.component';

describe('Lec9InterfacesObservablesComponent', () => {
  let component: Lec9InterfacesObservablesComponent;
  let fixture: ComponentFixture<Lec9InterfacesObservablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lec9InterfacesObservablesComponent]
    });
    fixture = TestBed.createComponent(Lec9InterfacesObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
