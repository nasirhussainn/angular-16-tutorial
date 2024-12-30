import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lec4AngularDirectivesComponent } from './lec4-angular-directives.component';

describe('Lec4AngularDirectivesComponent', () => {
  let component: Lec4AngularDirectivesComponent;
  let fixture: ComponentFixture<Lec4AngularDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lec4AngularDirectivesComponent]
    });
    fixture = TestBed.createComponent(Lec4AngularDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
