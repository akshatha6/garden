import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosiComponent } from './losi.component';

describe('LosiComponent', () => {
  let component: LosiComponent;
  let fixture: ComponentFixture<LosiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
