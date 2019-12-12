import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerItemComponent } from './officer-item.component';

describe('OfficerItemComponent', () => {
  let component: OfficerItemComponent;
  let fixture: ComponentFixture<OfficerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
