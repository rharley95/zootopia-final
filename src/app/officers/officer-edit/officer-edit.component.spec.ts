import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerEditComponent } from './officer-edit.component';

describe('OfficerEditComponent', () => {
  let component: OfficerEditComponent;
  let fixture: ComponentFixture<OfficerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
