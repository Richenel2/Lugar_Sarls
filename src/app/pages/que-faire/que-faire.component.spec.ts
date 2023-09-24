import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueFaireComponent } from './que-faire.component';

describe('QueFaireComponent', () => {
  let component: QueFaireComponent;
  let fixture: ComponentFixture<QueFaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueFaireComponent]
    });
    fixture = TestBed.createComponent(QueFaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
