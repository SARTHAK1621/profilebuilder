import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogINNavComponent } from './log-innav.component';

describe('LogINNavComponent', () => {
  let component: LogINNavComponent;
  let fixture: ComponentFixture<LogINNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogINNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogINNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
