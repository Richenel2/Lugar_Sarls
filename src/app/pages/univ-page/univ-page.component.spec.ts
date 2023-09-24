import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivPageComponent } from './univ-page.component';

describe('UnivPageComponent', () => {
  let component: UnivPageComponent;
  let fixture: ComponentFixture<UnivPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnivPageComponent]
    });
    fixture = TestBed.createComponent(UnivPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
