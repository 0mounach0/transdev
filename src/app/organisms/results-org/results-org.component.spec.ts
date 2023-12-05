import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsOrgComponent } from './results-org.component';

describe('ResultsOrgComponent', () => {
  let component: ResultsOrgComponent;
  let fixture: ComponentFixture<ResultsOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
