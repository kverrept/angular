import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeugdhuizenComponent } from './jeugdhuizen.component';

describe('JeugdhuizenComponent', () => {
  let component: JeugdhuizenComponent;
  let fixture: ComponentFixture<JeugdhuizenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeugdhuizenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeugdhuizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
