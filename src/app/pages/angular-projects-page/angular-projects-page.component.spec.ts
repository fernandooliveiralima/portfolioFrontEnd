import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProjectsPageComponent } from './angular-projects-page.component';

describe('AngularProjectsPageComponent', () => {
  let component: AngularProjectsPageComponent;
  let fixture: ComponentFixture<AngularProjectsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularProjectsPageComponent]
    });
    fixture = TestBed.createComponent(AngularProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
