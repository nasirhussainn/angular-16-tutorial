import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lec6AngularServicesComponent } from './lec6-angular-services.component';

describe('Lec6AngularServicesComponent', () => {
  let component: Lec6AngularServicesComponent;
  let fixture: ComponentFixture<Lec6AngularServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lec6AngularServicesComponent]
    });
    fixture = TestBed.createComponent(Lec6AngularServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
