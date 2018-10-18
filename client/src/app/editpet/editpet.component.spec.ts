import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpetComponent } from './editpet.component';

describe('EditpetComponent', () => {
  let component: EditpetComponent;
  let fixture: ComponentFixture<EditpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
