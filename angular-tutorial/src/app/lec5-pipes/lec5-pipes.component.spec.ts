import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lec5PipesComponent } from './lec5-pipes.component';

describe('Lec5PipesComponent', () => {
  let component: Lec5PipesComponent;
  let fixture: ComponentFixture<Lec5PipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lec5PipesComponent]
    });
    fixture = TestBed.createComponent(Lec5PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
