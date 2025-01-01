import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lec8TypeCheckingComponent } from './lec8-type-checking.component';

describe('Lec8TypeCheckingComponent', () => {
  let component: Lec8TypeCheckingComponent;
  let fixture: ComponentFixture<Lec8TypeCheckingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lec8TypeCheckingComponent]
    });
    fixture = TestBed.createComponent(Lec8TypeCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
