import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueSectionComponent } from './vue-section.component';

describe('VueSectionComponent', () => {
  let component: VueSectionComponent;
  let fixture: ComponentFixture<VueSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueSectionComponent]
    });
    fixture = TestBed.createComponent(VueSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
