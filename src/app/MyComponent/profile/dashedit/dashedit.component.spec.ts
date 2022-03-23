import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheditComponent } from './dashedit.component';

describe('DasheditComponent', () => {
  let component: DasheditComponent;
  let fixture: ComponentFixture<DasheditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasheditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasheditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
