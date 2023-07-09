import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueProjectsPageComponent } from './vue-projects-page.component';

describe('VueProjectsPageComponent', () => {
  let component: VueProjectsPageComponent;
  let fixture: ComponentFixture<VueProjectsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueProjectsPageComponent]
    });
    fixture = TestBed.createComponent(VueProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
