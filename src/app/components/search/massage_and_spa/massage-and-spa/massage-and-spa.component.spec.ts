import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageAndSpaComponent } from './massage-and-spa.component';

describe('MassageAndSpaComponent', () => {
  let component: MassageAndSpaComponent;
  let fixture: ComponentFixture<MassageAndSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassageAndSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageAndSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
