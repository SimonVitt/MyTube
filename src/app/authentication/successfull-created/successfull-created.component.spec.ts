import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullCreatedComponent } from './successfull-created.component';

describe('SuccessfullCreatedComponent', () => {
  let component: SuccessfullCreatedComponent;
  let fixture: ComponentFixture<SuccessfullCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfullCreatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfullCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
