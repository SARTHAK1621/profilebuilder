import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerinfoComponent } from './volunteerinfo.component';

describe('VolunteerinfoComponent', () => {
  let component: VolunteerinfoComponent;
  let fixture: ComponentFixture<VolunteerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
