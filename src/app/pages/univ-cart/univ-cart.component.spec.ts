import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivCartComponent } from './univ-cart.component';

describe('UnivCartComponent', () => {
  let component: UnivCartComponent;
  let fixture: ComponentFixture<UnivCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnivCartComponent]
    });
    fixture = TestBed.createComponent(UnivCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
