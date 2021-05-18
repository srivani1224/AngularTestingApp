import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeColorComponent } from './fake-color.component';

describe('FakeColorComponent', () => {
  let component: FakeColorComponent;
  let fixture: ComponentFixture<FakeColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
