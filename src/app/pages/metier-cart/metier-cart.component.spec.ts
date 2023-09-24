import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetierCartComponent } from './metier-cart.component';

describe('MetierCartComponent', () => {
  let component: MetierCartComponent;
  let fixture: ComponentFixture<MetierCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetierCartComponent]
    });
    fixture = TestBed.createComponent(MetierCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
