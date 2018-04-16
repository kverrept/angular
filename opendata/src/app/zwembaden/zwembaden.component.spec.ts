import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZwembadenComponent } from './zwembaden.component';

describe('ZwembadenComponent', () => {
  let component: ZwembadenComponent;
  let fixture: ComponentFixture<ZwembadenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZwembadenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZwembadenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
