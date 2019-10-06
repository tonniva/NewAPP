import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSummayComponent } from './search-summay.component';

describe('SearchSummayComponent', () => {
  let component: SearchSummayComponent;
  let fixture: ComponentFixture<SearchSummayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSummayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSummayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
