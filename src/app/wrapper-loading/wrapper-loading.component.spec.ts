import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperLoadingComponent } from './wrapper-loading.component';

describe('WrapperLoadingComponent', () => {
  let component: WrapperLoadingComponent;
  let fixture: ComponentFixture<WrapperLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
