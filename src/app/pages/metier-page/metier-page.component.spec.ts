import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetierPageComponent } from './metier-page.component';

describe('MetierPageComponent', () => {
  let component: MetierPageComponent;
  let fixture: ComponentFixture<MetierPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetierPageComponent]
    });
    fixture = TestBed.createComponent(MetierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
