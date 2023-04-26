import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadcontainerComponent } from './uploadcontainer.component';

describe('UploadcontainerComponent', () => {
  let component: UploadcontainerComponent;
  let fixture: ComponentFixture<UploadcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
