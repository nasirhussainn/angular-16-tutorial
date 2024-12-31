import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lec7ApiIntegrationComponent } from './lec7-api-integration.component';

describe('Lec7ApiIntegrationComponent', () => {
  let component: Lec7ApiIntegrationComponent;
  let fixture: ComponentFixture<Lec7ApiIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lec7ApiIntegrationComponent]
    });
    fixture = TestBed.createComponent(Lec7ApiIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
