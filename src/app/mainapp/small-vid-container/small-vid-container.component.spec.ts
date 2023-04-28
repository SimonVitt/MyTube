import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallVidContainerComponent } from './small-vid-container.component';

describe('SmallVidContainerComponent', () => {
  let component: SmallVidContainerComponent;
  let fixture: ComponentFixture<SmallVidContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallVidContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallVidContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
