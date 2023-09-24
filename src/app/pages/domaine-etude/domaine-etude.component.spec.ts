import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineEtudeComponent } from './domaine-etude.component';

describe('DomaineEtudeComponent', () => {
  let component: DomaineEtudeComponent;
  let fixture: ComponentFixture<DomaineEtudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomaineEtudeComponent]
    });
    fixture = TestBed.createComponent(DomaineEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
