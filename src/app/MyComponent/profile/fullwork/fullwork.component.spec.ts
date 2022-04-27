import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullworkComponent } from './fullwork.component';

describe('FullworkComponent', () => {
  let component: FullworkComponent;
  let fixture: ComponentFixture<FullworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
