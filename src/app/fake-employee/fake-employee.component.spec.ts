import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeEmployeeComponent } from './fake-employee.component';

describe('FakeEmployeeComponent', () => {
  let component: FakeEmployeeComponent;
  let fixture: ComponentFixture<FakeEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
