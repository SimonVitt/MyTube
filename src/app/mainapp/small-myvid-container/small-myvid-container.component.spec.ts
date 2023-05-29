import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallMyvidContainerComponent } from './small-myvid-container.component';

describe('SmallMyvidContainerComponent', () => {
  let component: SmallMyvidContainerComponent;
  let fixture: ComponentFixture<SmallMyvidContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallMyvidContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallMyvidContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
