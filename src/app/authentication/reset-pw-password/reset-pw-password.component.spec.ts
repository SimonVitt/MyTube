import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPwPasswordComponent } from './reset-pw-password.component';

describe('ResetPwPasswordComponent', () => {
  let component: ResetPwPasswordComponent;
  let fixture: ComponentFixture<ResetPwPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPwPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPwPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
