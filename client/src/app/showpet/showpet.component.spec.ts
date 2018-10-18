import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpetComponent } from './showpet.component';

describe('ShowpetComponent', () => {
  let component: ShowpetComponent;
  let fixture: ComponentFixture<ShowpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
