import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMolecComponent } from './search-molec.component';

describe('SearchMolecComponent', () => {
  let component: SearchMolecComponent;
  let fixture: ComponentFixture<SearchMolecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMolecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMolecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
