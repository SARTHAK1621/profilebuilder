import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdueditComponent } from './eduedit.component';

describe('EdueditComponent', () => {
  let component: EdueditComponent;
  let fixture: ComponentFixture<EdueditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdueditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdueditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
