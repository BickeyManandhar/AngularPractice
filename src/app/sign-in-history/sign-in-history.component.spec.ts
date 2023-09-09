import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInHistoryComponent } from './sign-in-history.component';

describe('SignInHistoryComponent', () => {
  let component: SignInHistoryComponent;
  let fixture: ComponentFixture<SignInHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInHistoryComponent]
    });
    fixture = TestBed.createComponent(SignInHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
