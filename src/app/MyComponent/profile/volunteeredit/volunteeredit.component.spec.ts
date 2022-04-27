import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteereditComponent } from './volunteeredit.component';

describe('VolunteereditComponent', () => {
  let component: VolunteereditComponent;
  let fixture: ComponentFixture<VolunteereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteereditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
