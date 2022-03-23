import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PofilenavComponent } from './pofilenav.component';

describe('PofilenavComponent', () => {
  let component: PofilenavComponent;
  let fixture: ComponentFixture<PofilenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PofilenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PofilenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
