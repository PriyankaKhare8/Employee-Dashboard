import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmployeeRecordComponent } from './add-edit-employee-record.component';

describe('AddEditEmployeeRecordComponent', () => {
  let component: AddEditEmployeeRecordComponent;
  let fixture: ComponentFixture<AddEditEmployeeRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEmployeeRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmployeeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
