import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lec3AngularComponentsComponent } from './lec3-angular-components.component';

describe('Lec3AngularComponentsComponent', () => {
  let component: Lec3AngularComponentsComponent;
  let fixture: ComponentFixture<Lec3AngularComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lec3AngularComponentsComponent]
    });
    fixture = TestBed.createComponent(Lec3AngularComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
